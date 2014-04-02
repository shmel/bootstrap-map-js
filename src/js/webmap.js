{
    "operationalLayers": [
    {
        "url": "https://prod1.spatialsys.com/arcgis/rest/services/Charles/BasemapSimple/MapServer",
        "id": "BasemapSimple_740",
        "visibility": false,
        "opacity": 1,
        "title": "Simple Basemap"
    },
    {
        "url": "https://prod1.spatialsys.com/arcgis/rest/services/Charles/Impervious/MapServer",
        "id": "Impervious_8324",
        "visibility": true,
        "opacity": 1,
        "title": "Impervious"
    },
    {
        "url": "https://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/Charles_Utilities_Property/MapServer",
        "id": "Charles_Utilities_Property_5460",
        "visibility": true,
        "opacity": 1,
        "title": "Charles_Utilities_Property"
    },
    {
        "url": "https://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/Charles_Utilities_WastewaterSystems/MapServer",
        "id": "Charles_Utilities_WastewaterSystems_2211",
        "visibility": false,
        "opacity": 1,
        "title": "Charles_Utilities_WastewaterSystems"
    },
    {
        "url": "https://prod1.spatialsys.com/arcgis/rest/services/LaPlata/Water/MapServer",
        "id": "Water_2621",
        "visibility": false,
        "opacity": 1,
        "title": "La Plata Water",
        "layers": [
            {
                "id": 0,
                "popupInfo": {
                    "title": "Water Tower: {TOWERNAME}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "visible": false
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "SHAPE",
                            "isEditable": false,
                            "visible": false
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": false,
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "dateFormat": "shortDateShortTime",
                                "timezone": "utc"
                            }
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": false,
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TOWERNAME",
                            "label": "TOWERNAME",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TOWERLOCATION",
                            "label": "TOWERLOCATION",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TOWERHEIGHT",
                            "label": "TOWERHEIGHT",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "CAPACITY",
                            "label": "CAPACITY",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALDATE",
                            "label": "OPERATIONALDATE",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "dateFormat": "shortDateShortTime",
                                "timezone": "utc"
                            }
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "dateFormat": "shortDateShortTime",
                                "timezone": "utc"
                            }
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TOPCAPACITYLINE",
                            "label": "TOPCAPACITYLINE",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "BOTTOMCAPACITYLINE",
                            "label": "BOTTOMCAPACITYLINE",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "TOWERTYPE",
                            "label": "TOWERTYPE",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "HEADRANGE",
                            "label": "HEADRANGE",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANUFACTURER",
                            "label": "MANUFACTURER",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MODEL",
                            "label": "MODEL",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YEAR",
                            "label": "YEAR",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CONTRACTNUMBER",
                            "label": "CONTRACTNUMBER",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TANKDIAMETER",
                            "label": "TANKDIAMETER",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        }
                    ],
                    "description": null,
                    "showAttachments": false,
                    "mediaInfos": []
                }
            },
            {
                "id": 1,
                "popupInfo": {
                    "title": "Meter: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "visible": false
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": false,
                            "visible": false
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": false,
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "dateFormat": "shortDateShortTime",
                                "timezone": "utc"
                            }
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": false,
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FLOWRANGE",
                            "label": "FLOWRANGE",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MEASUREMENTDATE",
                            "label": "MEASUREMENTDATE",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "dateFormat": "shortDateShortTime",
                                "timezone": "utc"
                            }
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "dateFormat": "shortDateShortTime",
                                "timezone": "utc"
                            }
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATION",
                            "label": "LOCATION",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": false,
                    "mediaInfos": []
                }
            },
            {
                "id": 4,
                "popupInfo": {
                    "title": "Manhole: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "visible": false
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": false,
                            "visible": false
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": false,
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "dateFormat": "shortDateShortTime",
                                "timezone": "utc"
                            }
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": false,
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ACCESSDIAMETER",
                            "label": "AccessDiameter",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "ACCESSTYPE",
                            "label": "AccessType",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GROUNDTYPE",
                            "label": "GROUNDTYPE",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "HIGHPIPEELEVATION",
                            "label": "HIGHPIPEELEVATION",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "INTERIORDROP",
                            "label": "INTERIORDROP",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "INVERTELEVATION",
                            "label": "INVERTELEVATION",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "WALLMATERIAL",
                            "label": "WALLMATERIAL",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "dateFormat": "shortDateShortTime",
                                "timezone": "utc"
                            }
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": false,
                    "mediaInfos": []
                }
            },
            {
                "id": 3,
                "popupInfo": {
                    "title": "Network Structure: {NAME}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NAME",
                            "label": "NAME",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALDATE",
                            "label": "OPERATIONALDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "REFERENCEID",
                            "label": "REFERENCEID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCE",
                            "label": "SOURCE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NETWORKUSAGE",
                            "label": "NetworkUsage",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERSTRUCTUREFACILITYID",
                            "label": "WATERSTRUCTUREFACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 2,
                "popupInfo": {
                    "title": "Sampling Station: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATIONID",
                            "label": "STATIONID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 5,
                "popupInfo": {
                    "title": "Fitting: {FACILITYID}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE",
                            "label": "JointType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MATERIAL",
                            "label": "Material",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER1",
                            "label": "Diameter1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER2",
                            "label": "Diameter2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER3",
                            "label": "Diameter3",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER4",
                            "label": "Diameter4",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEGREES",
                            "label": "DEGREES",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RESTRAINTTYPE",
                            "label": "RESTRAINTTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANGLE",
                            "label": "ANGLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 6,
                "popupInfo": {
                    "title": "Clear Well: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CAPACITY",
                            "label": "CAPACITY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPTH",
                            "label": "DEPTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATINGMAX",
                            "label": "OPERATINGMAX",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATINGMIN",
                            "label": "OPERATINGMIN",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATIONID",
                            "label": "STATIONID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER1",
                            "label": "Diameter1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER2",
                            "label": "Diameter2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 7,
                "popupInfo": {
                    "title": "Hydrant: {FACILITYID}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BARRELDIAMETER",
                            "label": "BarrelDiameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MAINVALVETYPE",
                            "label": "MAINVALVETYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOZZLEDIAMETER1",
                            "label": "NozzleDiameter1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOZZLEDIAMETER2",
                            "label": "NozzleDiameter2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOZZLEDIAMETER3",
                            "label": "NozzleDiameter3",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOZZLEDIAMETER4",
                            "label": "NozzleDiameter4",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OUTLETCONFIGURATION",
                            "label": "OUTLETCONFIGURATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SEATDIAMETER",
                            "label": "SEATDIAMETER",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BURYDEPTH",
                            "label": "BURYDEPTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANUFACTURER",
                            "label": "MANUFACTURER",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MAKE",
                            "label": "MAKE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MODEL",
                            "label": "MODEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BURYLINE",
                            "label": "BURYLINE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELBOWELEVATION",
                            "label": "ELBOWELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PRESSURECLASS",
                            "label": "PRESSURECLASS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "XCOORD",
                            "label": "XCOORD",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YCOORD",
                            "label": "YCOORD",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 8,
                "popupInfo": {
                    "title": "Control Valve: {FACILITYID}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ACTUATORTYPE",
                            "label": "ACTUATORTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOOPTAGID",
                            "label": "LOOPTAGID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 9,
                "popupInfo": {
                    "title": "System Valve: {FACILITYID}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BYPASSVALVE",
                            "label": "BypassValve",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CLOCKWISETOCLOSE",
                            "label": "ClockwiseToClose",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CURRENTLYOPEN",
                            "label": "CurrentlyOpen",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MOTORIZED",
                            "label": "Motorized",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NORMALLYOPEN",
                            "label": "NormallyOpen",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PERCENTOPEN",
                            "label": "PercentOpen",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PRESSURESETTING",
                            "label": "PRESSURESETTING",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "REGULATIONTYPE",
                            "label": "RegulationType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TURNSTOCLOSE",
                            "label": "TURNSTOCLOSE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERABLE",
                            "label": "Operable",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOOPTAGID",
                            "label": "LOOPTAGID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ACTUATORTYPE",
                            "label": "ACTUATORTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 10,
                "popupInfo": {
                    "title": "Well: {NAME}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "SHAPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NAME",
                            "label": "NAME",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESCRIPTION",
                            "label": "DESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLATIONDATE",
                            "label": "INSTALLATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CAPACITY",
                            "label": "CAPACITY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TYPE",
                            "label": "TYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALTIYLEVEL",
                            "label": "UTILITYQUALTIYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 11,
                "popupInfo": {
                    "title": "Pressurized Main: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FLOWMEASUREMENTID",
                            "label": "FLOWMEASUREMENTID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MATERIAL",
                            "label": "Material",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "EXTERIORCOATING",
                            "label": "EXTERIORCOATING",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE1",
                            "label": "JointType1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE2",
                            "label": "JointType2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LININGTYPE",
                            "label": "LININGTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PIPECLASS",
                            "label": "PIPECLASS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROUGHNESS",
                            "label": "ROUGHNESS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPTH",
                            "label": "DEPTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PIPELENGTH",
                            "label": "PIPELENGTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MAXFLOWRATE",
                            "label": "MAXFLOWRATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GROUNDSURFACETYPE",
                            "label": "GROUNDSURFACETYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PRESSURERATING",
                            "label": "PRESSURERATING",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Length",
                            "label": "SHAPE_Length",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 12,
                "popupInfo": {
                    "title": "Lateral Line: {FACILITYID}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FLOWMEASUREMENTID",
                            "label": "FLOWMEASUREMENTID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MATERIAL",
                            "label": "Material",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CONNECTIONTYPE",
                            "label": "CONNECTIONTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Length",
                            "label": "SHAPE_Length",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 13,
                "popupInfo": {
                    "title": "Lateral Line Private: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "SHAPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FLOWMEASUREMENTID",
                            "label": "FLOWMEASUREMENTID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MATERIAL",
                            "label": "Material",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Length",
                            "label": "SHAPE_Length",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            }
        ]
    },
    {
        "url": "https://prod1.spatialsys.com/arcgis/rest/services/LaPlata/SewerActive/MapServer",
        "id": "SewerActive_1754",
        "visibility": false,
        "opacity": 1,
        "title": "La Plata Sewer",
        "layers": [
            {
                "id": 0,
                "popupInfo": {
                    "title": "Network Structure: {SUBTYPE}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "SHAPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "Rotation",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NAME",
                            "label": "NAME",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALDATE",
                            "label": "OPERATIONALDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "REFERENCEID",
                            "label": "REFERENCEID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCE",
                            "label": "SOURCE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NETWORKUSAGE",
                            "label": "NetworkUsage",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NETWORKOID",
                            "label": "NETWORKOID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATION_DATE",
                            "label": "CREATION_DATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QC_STATUS",
                            "label": "QC_STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MAINTENANCERESP",
                            "label": "MAINTENANCERESP",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CHECKPOINT_ID",
                            "label": "CHECKPOINT_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 1,
                "popupInfo": {
                    "title": "Manhole: {SUBTYPE}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "AncillaryRole",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "SUBTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "Rotation",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ACCESSDIAMETER",
                            "label": "AccessDiameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ACCESSTYPE",
                            "label": "AccessType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GROUNDTYPE",
                            "label": "GROUNDTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "HIGHPIPEELEVATION",
                            "label": "HIGHPIPEELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INTERIORDROP",
                            "label": "INTERIORDROP",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INVERTELEVATION",
                            "label": "INVERTELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WALLMATERIAL",
                            "label": "WALLMATERIAL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "Status",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "IMAGEID1",
                            "label": "IMAGEID1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "IMAGEID2",
                            "label": "IMAGEID2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "IMAGEID3",
                            "label": "IMAGEID3",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DROPTYPE",
                            "label": "DropType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QC_STATUS",
                            "label": "QC_STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DROPTYPECLASS",
                            "label": "DROPTYPECLASS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS2",
                            "label": "COMMENTS2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CHECKPOINT_ID",
                            "label": "CHECKPOINT_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 2,
                "popupInfo": {
                    "title": "Gravity Main: {SUBTYPE}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FLOWMEASUREMENTID",
                            "label": "FLOWMEASUREMENTID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MATERIAL",
                            "label": "Material",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "EXTERIORCOATING",
                            "label": "EXTERIORCOATING",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE1",
                            "label": "JointType1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE2",
                            "label": "JointType2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LININGTYPE",
                            "label": "LININGTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PIPECLASS",
                            "label": "PIPECLASS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROUGHNESS",
                            "label": "ROUGHNESS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BARRELCOUNT",
                            "label": "BARRELCOUNT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CROSSSECTIONSHAPE",
                            "label": "CrossSectionShape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UPSTREAMINVERT",
                            "label": "UPSTREAMINVERT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DOWNSTREAMINVERT",
                            "label": "DOWNSTREAMINVERT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MEASUREMENT1",
                            "label": "Measurement1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MEASUREMENT2",
                            "label": "Measurement2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOMINALDIAMETER",
                            "label": "NominalDiameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SLOPE",
                            "label": "SLOPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PIPELENGTH",
                            "label": "PIPELENGTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "Status",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "IMAGEID1",
                            "label": "IMAGEID1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "IMAGEID2",
                            "label": "IMAGEID2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "IMAGEID3",
                            "label": "IMAGEID3",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RATEDMAXCAPACITY",
                            "label": "RATEDMAXCAPACITY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UPSTREAMMH",
                            "label": "UPSTREAMMH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DOWNSTREAMMH",
                            "label": "DOWNSTREAMMH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QC_STATUS",
                            "label": "QC_STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS2",
                            "label": "COMMENTS2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PROTECTIVEMATERIAL",
                            "label": "PROTECTIVEMATERIAL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CHECKPOINT_ID",
                            "label": "CHECKPOINT_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Length",
                            "label": "SHAPE_Length",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 3,
                "popupInfo": {
                    "title": "Gravity Main - Source Documents Available: {SUBTYPE}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FLOWMEASUREMENTID",
                            "label": "FLOWMEASUREMENTID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MATERIAL",
                            "label": "Material",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "EXTERIORCOATING",
                            "label": "EXTERIORCOATING",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE1",
                            "label": "JointType1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE2",
                            "label": "JointType2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LININGTYPE",
                            "label": "LININGTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PIPECLASS",
                            "label": "PIPECLASS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROUGHNESS",
                            "label": "ROUGHNESS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BARRELCOUNT",
                            "label": "BARRELCOUNT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CROSSSECTIONSHAPE",
                            "label": "CrossSectionShape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UPSTREAMINVERT",
                            "label": "UPSTREAMINVERT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DOWNSTREAMINVERT",
                            "label": "DOWNSTREAMINVERT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MEASUREMENT1",
                            "label": "Measurement1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MEASUREMENT2",
                            "label": "Measurement2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOMINALDIAMETER",
                            "label": "NominalDiameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SLOPE",
                            "label": "SLOPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PIPELENGTH",
                            "label": "PIPELENGTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "Status",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "IMAGEID1",
                            "label": "IMAGEID1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "IMAGEID2",
                            "label": "IMAGEID2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "IMAGEID3",
                            "label": "IMAGEID3",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RATEDMAXCAPACITY",
                            "label": "RATEDMAXCAPACITY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UPSTREAMMH",
                            "label": "UPSTREAMMH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DOWNSTREAMMH",
                            "label": "DOWNSTREAMMH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QC_STATUS",
                            "label": "QC_STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS2",
                            "label": "COMMENTS2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PROTECTIVEMATERIAL",
                            "label": "PROTECTIVEMATERIAL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CHECKPOINT_ID",
                            "label": "CHECKPOINT_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Length",
                            "label": "SHAPE_Length",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 4,
                "popupInfo": {
                    "title": "Pressurized Main: {SUBTYPE}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FLOWMEASUREMENTID",
                            "label": "FLOWMEASUREMENTID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MATERIAL",
                            "label": "Material",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "EXTERIORCOATING",
                            "label": "EXTERIORCOATING",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE1",
                            "label": "JointType1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE2",
                            "label": "JointType2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LININGTYPE",
                            "label": "LININGTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PIPECLASS",
                            "label": "PIPECLASS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROUGHNESS",
                            "label": "ROUGHNESS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPTH",
                            "label": "DEPTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GROUNDSURFACETYPE",
                            "label": "GROUNDSURFACETYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PRESSURERATING",
                            "label": "PRESSURERATING",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATION_DATE",
                            "label": "CREATION_DATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QC_STATUS",
                            "label": "QC_STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MAXFLOWRATE",
                            "label": "MAXFLOWRATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CHECKPOINT_ID",
                            "label": "CHECKPOINT_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Length",
                            "label": "SHAPE_Length",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 5,
                "popupInfo": {
                    "title": "Pressurized Main - Source Documents Available: {SUBTYPE}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "visible": false
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": false,
                            "visible": false
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": false,
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "dateFormat": "shortDateShortTime",
                                "timezone": "utc"
                            }
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": false,
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FLOWMEASUREMENTID",
                            "label": "FLOWMEASUREMENTID",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MATERIAL",
                            "label": "Material",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "EXTERIORCOATING",
                            "label": "EXTERIORCOATING",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE1",
                            "label": "JointType1",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE2",
                            "label": "JointType2",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LININGTYPE",
                            "label": "LININGTYPE",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PIPECLASS",
                            "label": "PIPECLASS",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROUGHNESS",
                            "label": "ROUGHNESS",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "DEPTH",
                            "label": "DEPTH",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "GROUNDSURFACETYPE",
                            "label": "GROUNDSURFACETYPE",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PRESSURERATING",
                            "label": "PRESSURERATING",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATION_DATE",
                            "label": "CREATION_DATE",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "dateFormat": "shortDateShortTime",
                                "timezone": "utc"
                            }
                        },
                        {
                            "fieldName": "QC_STATUS",
                            "label": "QC_STATUS",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MAXFLOWRATE",
                            "label": "MAXFLOWRATE",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CHECKPOINT_ID",
                            "label": "CHECKPOINT_ID",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "SHAPE_Length",
                            "label": "SHAPE_Length",
                            "isEditable": false,
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            }
                        }
                    ],
                    "description": null,
                    "showAttachments": false,
                    "mediaInfos": []
                }
            },
            {
                "id": 6,
                "popupInfo": {
                    "title": "Lateral Line: {SUBTYPE}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "visible": false
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": false,
                            "visible": false
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": false,
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "dateFormat": "shortDateShortTime",
                                "timezone": "utc"
                            }
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": false,
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FLOWMEASUREMENTID",
                            "label": "FLOWMEASUREMENTID",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MATERIAL",
                            "label": "Material",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "QC_STATUS",
                            "label": "QC_STATUS",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATION_DATE",
                            "label": "CREATION_DATE",
                            "isEditable": false,
                            "visible": true,
                            "format": {
                                "dateFormat": "shortDateShortTime",
                                "timezone": "utc"
                            }
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": false,
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Length",
                            "label": "SHAPE_Length",
                            "isEditable": false,
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            }
                        }
                    ],
                    "description": null,
                    "showAttachments": false,
                    "mediaInfos": []
                }
            }
        ]
    },
    {
        "url": "https://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/Charles_Utilities_Reclaimed/MapServer",
        "id": "Charles_Utilities_Reclaimed_2554",
        "visibility": true,
        "opacity": 1,
        "title": "Charles_Utilities_Reclaimed"
    },
    {
        "url": "https://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/Charles_Utilities_Wastewater/MapServer",
        "id": "Charles_Utilities_Wastewater_2309",
        "visibility": true,
        "opacity": 1,
        "title": "Charles_Utilities_Wastewater"
    },
    {
        "url": "https://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/Charles_Utilities_Water/MapServer",
        "id": "Charles_Utilities_Water_7158",
        "visibility": true,
        "opacity": 1,
        "title": "Charles_Utilities_Water",
        "layers": [
            {
                "id": 19,
                "popupInfo": {
                    "title": "wPressurizedMain: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FLOWMEASUREMENTID",
                            "label": "FLOWMEASUREMENTID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MATERIAL",
                            "label": "Material",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "EXTERIORCOATING",
                            "label": "EXTERIORCOATING",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE1",
                            "label": "JointType1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE2",
                            "label": "JointType2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LININGTYPE",
                            "label": "LININGTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PIPECLASS",
                            "label": "PIPECLASS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROUGHNESS",
                            "label": "ROUGHNESS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPTH",
                            "label": "DEPTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PIPELENGTH",
                            "label": "PIPELENGTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MAXFLOWRATE",
                            "label": "MAXFLOWRATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GROUNDSURFACETYPE",
                            "label": "GROUNDSURFACETYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PRESSURERATING",
                            "label": "PRESSURERATING",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Length",
                            "label": "SHAPE_Length",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Manufacturer",
                            "label": "Manufacturer",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ManufactureDate",
                            "label": "ManufactureDate",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BatchNumber",
                            "label": "BatchNumber",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "InteriorDiameter",
                            "label": "InteriorDiameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ExteriorDiameter",
                            "label": "ExteriorDiameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UOM",
                            "label": "UOM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 1,
                "popupInfo": {
                    "title": "wMeter: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FLOWRANGE",
                            "label": "FLOWRANGE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MEASUREMENTDATE",
                            "label": "MEASUREMENTDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATION",
                            "label": "LOCATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CalibrationDate",
                            "label": "CalibrationDate",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 2,
                "popupInfo": {
                    "title": "wCurbStop: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BYPASSVALVE",
                            "label": "BypassValve",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CLOCKWISETOCLOSE",
                            "label": "ClockwiseToClose",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CURRENTLYOPEN",
                            "label": "CurrentlyOpen",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MOTORIZED",
                            "label": "Motorized",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NORMALLYOPEN",
                            "label": "NormallyOpen",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PERCENTOPEN",
                            "label": "PercentOpen",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PRESSURESETTING",
                            "label": "PRESSURESETTING",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "REGULATIONTYPE",
                            "label": "RegulationType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TURNSTOCLOSE",
                            "label": "TURNSTOCLOSE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERABLE",
                            "label": "Operable",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOOPTAGID",
                            "label": "LOOPTAGID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ACTUATORTYPE",
                            "label": "ACTUATORTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 3,
                "popupInfo": {
                    "title": "wSamplingStation: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATIONID",
                            "label": "STATIONID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 4,
                "popupInfo": {
                    "title": "wNetworkStructure: {NAME}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NAME",
                            "label": "NAME",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALDATE",
                            "label": "OPERATIONALDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "REFERENCEID",
                            "label": "REFERENCEID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCE",
                            "label": "SOURCE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NETWORKUSAGE",
                            "label": "NetworkUsage",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERSTRUCTUREFACILITYID",
                            "label": "WATERSTRUCTUREFACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 5,
                "popupInfo": {
                    "title": "wManhole: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ACCESSDIAMETER",
                            "label": "AccessDiameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ACCESSTYPE",
                            "label": "AccessType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GROUNDTYPE",
                            "label": "GROUNDTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "HIGHPIPEELEVATION",
                            "label": "HIGHPIPEELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INTERIORDROP",
                            "label": "INTERIORDROP",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INVERTELEVATION",
                            "label": "INVERTELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WALLMATERIAL",
                            "label": "WALLMATERIAL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 6,
                "popupInfo": {
                    "title": "wFitting: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE",
                            "label": "JointType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MATERIAL",
                            "label": "Material",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER1",
                            "label": "Diameter1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER2",
                            "label": "Diameter2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER3",
                            "label": "Diameter3",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER4",
                            "label": "Diameter4",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEGREES",
                            "label": "DEGREES",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RESTRAINTTYPE",
                            "label": "RESTRAINTTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANGLE",
                            "label": "ANGLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "InteriorLining",
                            "label": "InteriorLining",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ExteriorCoating",
                            "label": "ExteriorCoating",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FastenerType",
                            "label": "FastenerType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 7,
                "popupInfo": {
                    "title": "wFitting Abandoned: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE",
                            "label": "JointType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MATERIAL",
                            "label": "Material",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER1",
                            "label": "Diameter1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER2",
                            "label": "Diameter2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER3",
                            "label": "Diameter3",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER4",
                            "label": "Diameter4",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEGREES",
                            "label": "DEGREES",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RESTRAINTTYPE",
                            "label": "RESTRAINTTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANGLE",
                            "label": "ANGLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "InteriorLining",
                            "label": "InteriorLining",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ExteriorCoating",
                            "label": "ExteriorCoating",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FastenerType",
                            "label": "FastenerType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 9,
                "popupInfo": {
                    "title": "wHydrant: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BARRELDIAMETER",
                            "label": "BarrelDiameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MAINVALVETYPE",
                            "label": "MAINVALVETYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOZZLEDIAMETER1",
                            "label": "NozzleDiameter1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOZZLEDIAMETER2",
                            "label": "NozzleDiameter2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOZZLEDIAMETER3",
                            "label": "NozzleDiameter3",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOZZLEDIAMETER4",
                            "label": "NozzleDiameter4",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OUTLETCONFIGURATION",
                            "label": "OUTLETCONFIGURATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SEATDIAMETER",
                            "label": "SEATDIAMETER",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BURYDEPTH",
                            "label": "BURYDEPTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANUFACTURER",
                            "label": "MANUFACTURER",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MAKE",
                            "label": "MAKE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MODEL",
                            "label": "MODEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BURYLINE",
                            "label": "BURYLINE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELBOWELEVATION",
                            "label": "ELBOWELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PRESSURECLASS",
                            "label": "PRESSURECLASS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Riser",
                            "label": "Riser",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BarrelType",
                            "label": "BarrelType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MarkerFlag",
                            "label": "MarkerFlag",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BonnetColor",
                            "label": "BonnetColor",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TopColor",
                            "label": "TopColor",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CapColor",
                            "label": "CapColor",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 10,
                "popupInfo": {
                    "title": "wHydrant: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BARRELDIAMETER",
                            "label": "BarrelDiameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MAINVALVETYPE",
                            "label": "MAINVALVETYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOZZLEDIAMETER1",
                            "label": "NozzleDiameter1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOZZLEDIAMETER2",
                            "label": "NozzleDiameter2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOZZLEDIAMETER3",
                            "label": "NozzleDiameter3",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOZZLEDIAMETER4",
                            "label": "NozzleDiameter4",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OUTLETCONFIGURATION",
                            "label": "OUTLETCONFIGURATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SEATDIAMETER",
                            "label": "SEATDIAMETER",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BURYDEPTH",
                            "label": "BURYDEPTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANUFACTURER",
                            "label": "MANUFACTURER",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MAKE",
                            "label": "MAKE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MODEL",
                            "label": "MODEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BURYLINE",
                            "label": "BURYLINE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELBOWELEVATION",
                            "label": "ELBOWELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PRESSURECLASS",
                            "label": "PRESSURECLASS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Riser",
                            "label": "Riser",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BarrelType",
                            "label": "BarrelType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MarkerFlag",
                            "label": "MarkerFlag",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BonnetColor",
                            "label": "BonnetColor",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TopColor",
                            "label": "TopColor",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CapColor",
                            "label": "CapColor",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 11,
                "popupInfo": {
                    "title": "wHydrant Abandoned: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BARRELDIAMETER",
                            "label": "BarrelDiameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MAINVALVETYPE",
                            "label": "MAINVALVETYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOZZLEDIAMETER1",
                            "label": "NozzleDiameter1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOZZLEDIAMETER2",
                            "label": "NozzleDiameter2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOZZLEDIAMETER3",
                            "label": "NozzleDiameter3",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NOZZLEDIAMETER4",
                            "label": "NozzleDiameter4",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OUTLETCONFIGURATION",
                            "label": "OUTLETCONFIGURATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SEATDIAMETER",
                            "label": "SEATDIAMETER",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BURYDEPTH",
                            "label": "BURYDEPTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANUFACTURER",
                            "label": "MANUFACTURER",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MAKE",
                            "label": "MAKE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MODEL",
                            "label": "MODEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BURYLINE",
                            "label": "BURYLINE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELBOWELEVATION",
                            "label": "ELBOWELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PRESSURECLASS",
                            "label": "PRESSURECLASS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Riser",
                            "label": "Riser",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BarrelType",
                            "label": "BarrelType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MarkerFlag",
                            "label": "MarkerFlag",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BonnetColor",
                            "label": "BonnetColor",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TopColor",
                            "label": "TopColor",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CapColor",
                            "label": "CapColor",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 0,
                "popupInfo": {
                    "title": "wWaterTower: {TOWERNAME}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TOWERNAME",
                            "label": "TOWERNAME",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TOWERLOCATION",
                            "label": "TOWERLOCATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TOWERHEIGHT",
                            "label": "TOWERHEIGHT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CAPACITY",
                            "label": "CAPACITY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALDATE",
                            "label": "OPERATIONALDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "SHAPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TOPCAPACITYLINE",
                            "label": "TOPCAPACITYLINE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BOTTOMCAPACITYLINE",
                            "label": "BOTTOMCAPACITYLINE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TOWERTYPE",
                            "label": "TOWERTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "HEADRANGE",
                            "label": "HEADRANGE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANUFACTURER",
                            "label": "MANUFACTURER",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MODEL",
                            "label": "MODEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YEAR",
                            "label": "YEAR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CONTRACTNUMBER",
                            "label": "CONTRACTNUMBER",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TANKDIAMETER",
                            "label": "TANKDIAMETER",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YEAR_",
                            "label": "YEAR_",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 12,
                "popupInfo": {
                    "title": "wControlValve: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ACTUATORTYPE",
                            "label": "ACTUATORTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOOPTAGID",
                            "label": "LOOPTAGID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 13,
                "popupInfo": {
                    "title": "wSystemValve: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BYPASSVALVE",
                            "label": "BypassValve",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CLOCKWISETOCLOSE",
                            "label": "ClockwiseToClose",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CURRENTLYOPEN",
                            "label": "CurrentlyOpen",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MOTORIZED",
                            "label": "Motorized",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NORMALLYOPEN",
                            "label": "NormallyOpen",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PERCENTOPEN",
                            "label": "PercentOpen",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PRESSURESETTING",
                            "label": "PRESSURESETTING",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "REGULATIONTYPE",
                            "label": "RegulationType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TURNSTOCLOSE",
                            "label": "TURNSTOCLOSE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERABLE",
                            "label": "Operable",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOOPTAGID",
                            "label": "LOOPTAGID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ACTUATORTYPE",
                            "label": "ACTUATORTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SeatMaterial",
                            "label": "SeatMaterial",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 14,
                "popupInfo": {
                    "title": "wSystemValve Abandoned: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "ROTATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BYPASSVALVE",
                            "label": "BypassValve",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CLOCKWISETOCLOSE",
                            "label": "ClockwiseToClose",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CURRENTLYOPEN",
                            "label": "CurrentlyOpen",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MOTORIZED",
                            "label": "Motorized",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NORMALLYOPEN",
                            "label": "NormallyOpen",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PERCENTOPEN",
                            "label": "PercentOpen",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PRESSURESETTING",
                            "label": "PRESSURESETTING",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "REGULATIONTYPE",
                            "label": "RegulationType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TURNSTOCLOSE",
                            "label": "TURNSTOCLOSE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERABLE",
                            "label": "Operable",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOOPTAGID",
                            "label": "LOOPTAGID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ACTUATORTYPE",
                            "label": "ACTUATORTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SeatMaterial",
                            "label": "SeatMaterial",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 15,
                "popupInfo": {
                    "title": "Well: {NAME}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NAME",
                            "label": "NAME",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESCRIPTION",
                            "label": "DESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLATIONDATE",
                            "label": "INSTALLATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CAPACITY",
                            "label": "CAPACITY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TYPE",
                            "label": "TYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "SHAPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALTIYLEVEL",
                            "label": "UTILITYQUALTIYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 16,
                "popupInfo": {
                    "title": "wSpatialOperationsRecord: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RECORDDATE",
                            "label": "RECORDDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ID",
                            "label": "ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "NETWORKFACILITYID",
                            "label": "NETWORKFACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 17,
                "popupInfo": {
                    "title": "wScadaSensor: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CURRENTVALUE",
                            "label": "CURRENTVALUE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ID",
                            "label": "ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MEASUREMENTTYPE",
                            "label": "MeasurementType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 20,
                "popupInfo": {
                    "title": "wPressurizedMain - Low Accuracy: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FLOWMEASUREMENTID",
                            "label": "FLOWMEASUREMENTID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MATERIAL",
                            "label": "Material",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "EXTERIORCOATING",
                            "label": "EXTERIORCOATING",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE1",
                            "label": "JointType1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE2",
                            "label": "JointType2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LININGTYPE",
                            "label": "LININGTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PIPECLASS",
                            "label": "PIPECLASS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROUGHNESS",
                            "label": "ROUGHNESS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPTH",
                            "label": "DEPTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PIPELENGTH",
                            "label": "PIPELENGTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MAXFLOWRATE",
                            "label": "MAXFLOWRATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GROUNDSURFACETYPE",
                            "label": "GROUNDSURFACETYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PRESSURERATING",
                            "label": "PRESSURERATING",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Length",
                            "label": "SHAPE_Length",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Manufacturer",
                            "label": "Manufacturer",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ManufactureDate",
                            "label": "ManufactureDate",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BatchNumber",
                            "label": "BatchNumber",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "InteriorDiameter",
                            "label": "InteriorDiameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ExteriorDiameter",
                            "label": "ExteriorDiameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UOM",
                            "label": "UOM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 21,
                "popupInfo": {
                    "title": "wPressurizedMain Abandoned: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FLOWMEASUREMENTID",
                            "label": "FLOWMEASUREMENTID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MATERIAL",
                            "label": "Material",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "EXTERIORCOATING",
                            "label": "EXTERIORCOATING",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE1",
                            "label": "JointType1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "JOINTTYPE2",
                            "label": "JointType2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LININGTYPE",
                            "label": "LININGTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PIPECLASS",
                            "label": "PIPECLASS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROUGHNESS",
                            "label": "ROUGHNESS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPTH",
                            "label": "DEPTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PIPELENGTH",
                            "label": "PIPELENGTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MAXFLOWRATE",
                            "label": "MAXFLOWRATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GROUNDSURFACETYPE",
                            "label": "GROUNDSURFACETYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "PRESSURERATING",
                            "label": "PRESSURERATING",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Length",
                            "label": "SHAPE_Length",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Manufacturer",
                            "label": "Manufacturer",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ManufactureDate",
                            "label": "ManufactureDate",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BatchNumber",
                            "label": "BatchNumber",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "InteriorDiameter",
                            "label": "InteriorDiameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ExteriorDiameter",
                            "label": "ExteriorDiameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UOM",
                            "label": "UOM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 22,
                "popupInfo": {
                    "title": "wLateralLine: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FLOWMEASUREMENTID",
                            "label": "FLOWMEASUREMENTID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MATERIAL",
                            "label": "Material",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CONNECTIONTYPE",
                            "label": "CONNECTIONTYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Length",
                            "label": "SHAPE_Length",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UOM",
                            "label": "UOM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 23,
                "popupInfo": {
                    "title": "CHARLES.wLateralLinePrivate: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FLOWMEASUREMENTID",
                            "label": "FLOWMEASUREMENTID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MATERIAL",
                            "label": "Material",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "SHAPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Length",
                            "label": "SHAPE_Length",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UOM",
                            "label": "UOM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 24,
                "popupInfo": {
                    "title": "wWaterStructure: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALDATE",
                            "label": "OPERATIONALDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Length",
                            "label": "SHAPE_Length",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Area",
                            "label": "SHAPE_Area",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 25,
                "popupInfo": {
                    "title": "wThrustProtection: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Length",
                            "label": "SHAPE_Length",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Area",
                            "label": "SHAPE_Area",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 26,
                "popupInfo": {
                    "title": "wUndergroundEnclosure: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COVERMATERIAL",
                            "label": "CoverMaterial",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COVERTYPE",
                            "label": "CoverType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPTH",
                            "label": "DEPTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FRAMEMATERIAL",
                            "label": "FrameMaterial",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FRAMETYPE",
                            "label": "FRAMETYPE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INVERTELEVATION",
                            "label": "INVERTELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MEASUREMENT1",
                            "label": "Measurement1",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MEASUREMENT2",
                            "label": "Measurement2",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Length",
                            "label": "SHAPE_Length",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Area",
                            "label": "SHAPE_Area",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            },
            {
                "id": 27,
                "popupInfo": {
                    "title": "wCasing: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DIAMETER",
                            "label": "Diameter",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MATERIAL",
                            "label": "Material",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RECORDEDLENGTH",
                            "label": "RECORDEDLENGTH",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTILITYQUALITYLEVEL",
                            "label": "UTILITYQUALITYLEVEL",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATIONDATE",
                            "label": "CREATIONDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QCSTATUS",
                            "label": "QCSTATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Length",
                            "label": "SHAPE_Length",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE_Area",
                            "label": "SHAPE_Area",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            }
        ]
    },
    {
        "url": "https://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/Charles_Utilities_LateralPts/MapServer",
        "id": "Charles_Utilities_LateralPts_3642",
        "visibility": true,
        "opacity": 1,
        "title": "Charles_Utilities_LateralPts",
        "layers": [
            {
                "id": 0,
                "popupInfo": {
                    "title": "Lateral Point: {ADMINISTRATIVEAREA}",
                    "fieldInfos": [
                        {
                            "fieldName": "OBJECTID",
                            "label": "OBJECTID",
                            "isEditable": false,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ANCILLARYROLE",
                            "label": "ANCILLARYROLE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ENABLED",
                            "label": "Enabled",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SUBTYPE",
                            "label": "Subtype",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADMINISTRATIVEAREA",
                            "label": "AdministrativeArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FACILITYID",
                            "label": "FACILITYID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "INSTALLDATE",
                            "label": "INSTALLDATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LOCATIONDESCRIPTION",
                            "label": "LOCATIONDESCRIPTION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OPERATIONALAREA",
                            "label": "OperationalArea",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ROTATION",
                            "label": "Rotation",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LIFECYCLESTATUS",
                            "label": "LifecycleStatus",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WORKORDERID",
                            "label": "WORKORDERID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ELEVATION",
                            "label": "ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "WATERTYPE",
                            "label": "WaterType",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ACCOUNTID",
                            "label": "ACCOUNTID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CRITICALCUSTOMER",
                            "label": "CriticalCustomer",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "UTIL_ID",
                            "label": "UTIL_ID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "QC_STATUS",
                            "label": "QC_STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATOR",
                            "label": "CREATOR",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CREATION_DATE",
                            "label": "CREATION_DATE",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "COMMENTS",
                            "label": "COMMENTS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SOURCEDOCACCURACY",
                            "label": "SOURCEDOCACCURACY",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FF_ELEVATION",
                            "label": "FF_ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "FIXTURE_ELEVATION",
                            "label": "FIXTURE_ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ADDRESS",
                            "label": "ADDRESS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ACCTID",
                            "label": "ACCTID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "BF_ELEVATION",
                            "label": "BF_ELEVATION",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "TAXLINK",
                            "label": "TAXLINK",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE",
                            "label": "System Code",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ORG",
                            "label": "ORG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "STATUS",
                            "label": "STATUS",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DESC_",
                            "label": "DESC",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "DEPT",
                            "label": "DEPT",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SubtypeLabel",
                            "label": "SubtypeLabel",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "YearBuilt",
                            "label": "YearBuilt",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "dateFormat": "longMonthDayYear"
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ServiceLife",
                            "label": "ServiceLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "RemainingLife",
                            "label": "RemainingLife",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Condition",
                            "label": "Condition",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Criticality",
                            "label": "Criticality",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "OriginalCost",
                            "label": "OriginalCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "CurrentValue",
                            "label": "CurrentValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ReplacementCost",
                            "label": "ReplacementCost",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SalvageValue",
                            "label": "SalvageValue",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "ECO",
                            "label": "ECO",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "InteriorCoating",
                            "label": "InteriorCoating",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "LidLocked",
                            "label": "LidLocked",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Multiple",
                            "label": "Multiple",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Inlet_Outlet",
                            "label": "Inlet_Outlet",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "MANAGED_FLAG",
                            "label": "MANAGED_FLAG",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "GISOBJID",
                            "label": "GISOBJID",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "Asset_MasterNbr",
                            "label": "Asset_MasterNbr",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": {
                                "places": 0,
                                "digitSeparator": true
                            },
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SYSTEMCODE2",
                            "label": "System Code 2 EAM",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": true,
                            "format": null,
                            "stringFieldOption": "textbox"
                        },
                        {
                            "fieldName": "SHAPE",
                            "label": "Shape",
                            "isEditable": true,
                            "tooltip": "",
                            "visible": false,
                            "format": null,
                            "stringFieldOption": "textbox"
                        }
                    ],
                    "description": null,
                    "showAttachments": true,
                    "mediaInfos": []
                }
            }
        ]
