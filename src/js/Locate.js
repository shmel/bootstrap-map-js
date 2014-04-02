/**
 * Created by shmel on 3/25/14.
 */
require([
    "dojo/_base/lang",
    "esri/dijit/LocateButton",
    "dojo/Deferred",
    "esri/config",
    "esri/geometry/Point",
    "esri/SpatialReference"
], function (
    lang,
    LocateButton,
    Deferred,
    esriConfig,
    Point,
    SpatialReference
    ) {
    lang.extend(LocateButton, {
        _setPosition: function (location) {
            var deferred = new Deferred;
            if (location && location.coords) {
                var point = null;
                var scale = this.get("scale") || location.coords.accuracy || 5E4;
                esri.config.defaults.geometryService = new esri.tasks.GeometryService('http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer');
                if (point = new Point([location.coords.longitude, location.coords.latitude], new SpatialReference({ wkid: 4326 }))) {
                    esriConfig.defaults.geometryService.project([point], this.map.spatialReference).then(lang.hitch(this, function (projectedPoints) {
                        point = projectedPoints[0];
                        var event = this._createEvent(point, scale, location);
                        if (this.get("setScale")) this.get("map").setScale(scale);
                        if (this.get("centerAt")) {
                            this.get("map").centerAt(point).then(lang.hitch(this, function () {
                                deferred.resolve(event);
                            }), lang.hitch(this, function (err) {
                                if (!err) err = Error("LocateButton::Could not center map.");
                                deferred.reject(err);
                            }));
                        }
                        else {
                            deferred.resolve(event);
                        }
                    }), lang.hitch(this, function (err) {
                        if (!err) err = Error("LocateButton::Could not project point to map's spatial reference.");
                        deferred.reject(err);
                    }));
                }
                else {
                    var err = Error("LocateButton::Invalid point");
                    deferred.reject(err)
                }
            }
            else {
                var err = Error("LocateButton::Invalid position");
                deferred.reject(err);
            }
            return deferred.promise;
        }
    });
});