'use strict';

angular.module('shockwaveCalculatorWebApp')
    .factory('materialsFactory', function () {

    var factory = {};

    var itemsList = [
        {
            Density: 0.884,
            Formula: "(mixture)",
            Name: "Air",
            Phases: [
                {
                    DimensionlessSparameter: 1.20,
                    DimensionlessSparameterError: 0.0,
                    IsentropicBulkSoundSpeed: 2.28,
                    IsentropicBulkSoundSpeedError: 0.0,
                    NumberOfData: 2,
                    PhaseNumber: "2",
                    ShockVelocityLower: 4.317,
                    ShockVelocityUpper: 5.788
                },
                {
                    DimensionlessSparameter: 0.85,
                    DimensionlessSparameterError: 0.08,
                    IsentropicBulkSoundSpeed: 4.25,
                    IsentropicBulkSoundSpeedError: 0.0,
                    NumberOfData: 2,
                    PhaseNumber: "4",
                    ShockVelocityLower: 5.788,
                    ShockVelocityUpper: 7.379
                }
            ],
            References: "[147]",
            Remarks: "Though '0' is displayed for both measurement errors for both phases, no measurement error information exists for this material. Air-0.884 record found in Table 1 on page 144.",
            SpecialMeasurementIdentifier: 'c',
            Standard: "Gases"
        },
        {
            Density: 9.817,
            Formula: "Bi",
            Name: "Bismuth",
            Phases: [
                {
                    DimensionlessSparameter: -1.0,
                    DimensionlessSparameterError: 0.5,
                    IsentropicBulkSoundSpeed: 2.17,
                    IsentropicBulkSoundSpeedError: 0.06,
                    NumberOfData: 17,
                    PhaseNumber: "1",
                    ShockVelocityLower: 0.00,
                    ShockVelocityUpper: 0.32
                },
                {
                    DimensionlessSparameter: 2.20,
                    DimensionlessSparameterError: 0.07,
                    IsentropicBulkSoundSpeed: 1.08,
                    IsentropicBulkSoundSpeedError: 0.06,
                    NumberOfData: 30,
                    PhaseNumber: "2",
                    ShockVelocityLower: 0.32,
                    ShockVelocityUpper: 1.183
                },
                {
                    DimensionlessSparameter: 1.358,
                    DimensionlessSparameterError: 0.019,
                    IsentropicBulkSoundSpeed: 2.01,
                    IsentropicBulkSoundSpeedError: 0.04,
                    NumberOfData: 21,
                    PhaseNumber: "4",
                    ShockVelocityLower: 1.183,
                    ShockVelocityUpper: 4.45
                }
            ],
            References: "[30,68,89,113,121,131,166,217,226]",
            Remarks: "Bismuth-9.817 record found in Table 1 on page 146.",
            SpecialMeasurementIdentifier: '',
            Standard: "Elements"
        },
        {
            Density: 2.333,
            Formula: "SiC",
            Name: "Moissanite",
            Phases: [
                {
                    DimensionlessSparameter: 1.84,
                    DimensionlessSparameterError: 0.12,
                    IsentropicBulkSoundSpeed: 2.3,
                    IsentropicBulkSoundSpeedError: 0.3,
                    NumberOfData: 10,
                    PhaseNumber: "4",
                    ShockVelocityLower: 2.048,
                    ShockVelocityUpper: 3.444
                }
            ],
            References: "[121,127,136]",
            Remarks: "Moissanite-2.333 record found in Table 1 on page 152.",
            SpecialMeasurementIdentifier: '',
            Standard: "Carbides"
        },
        {
            Density: 20.53,
            Formula: "Re",
            Name: "Rhenium",
            Phases: [
                {
                    DimensionlessSparameter: 0.04,
                    DimensionlessSparameterError: 0.18,
                    IsentropicBulkSoundSpeed: 4.12,
                    IsentropicBulkSoundSpeedError: 0.05,
                    NumberOfData: 3,
                    PhaseNumber: "1",
                    ShockVelocityLower: 0.00,
                    ShockVelocityUpper: 0.372
                },
                {
                    DimensionlessSparameter: 1.63,
                    DimensionlessSparameterError: 0.08,
                    IsentropicBulkSoundSpeed: 3.56,
                    IsentropicBulkSoundSpeedError: 0.08,
                    NumberOfData: 7,
                    PhaseNumber: "2",
                    ShockVelocityLower: 0.372,
                    ShockVelocityUpper: 1.441
                },
                {
                    DimensionlessSparameter: 1.32,
                    DimensionlessSparameterError: 0.12,
                    IsentropicBulkSoundSpeed: 4.0,
                    IsentropicBulkSoundSpeedError: 0.2,
                    NumberOfData: 6,
                    PhaseNumber: "4",
                    ShockVelocityLower: 1.346,
                    ShockVelocityUpper: 2.028
                }
            ],
            References: "[121,136]",
            Remarks: "Rhenium-20.53 record found in Table 1 on page 151.",
            SpecialMeasurementIdentifier: '',
            Standard: "Elements"
        },
        {
            Density: 20.984,
            Formula: "Re",
            Name: "Rhenium",
            Phases: [
                {
                    DimensionlessSparameter: 1.40,
                    DimensionlessSparameterError: 0.06,
                    IsentropicBulkSoundSpeed: 4.16,
                    IsentropicBulkSoundSpeedError: 0.04,
                    NumberOfData: 7,
                    PhaseNumber: "2",
                    ShockVelocityLower: 0.00,
                    ShockVelocityUpper: 1.127
                }
            ],
            References: "[121,136]",
            Remarks: "Rhenium-20.984 record found in Table 1 on page 151.",
            SpecialMeasurementIdentifier: '',
            Standard: "Elements"
        }
    ];

    factory.getMaterials = function () {   
        return itemsList;
    };

    return factory;
});