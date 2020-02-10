package patches.buildTypes

import jetbrains.buildServer.configs.kotlin.v2018_2.*
import jetbrains.buildServer.configs.kotlin.v2018_2.failureConditions.BuildFailureOnMetric
import jetbrains.buildServer.configs.kotlin.v2018_2.failureConditions.failOnMetricChange
import jetbrains.buildServer.configs.kotlin.v2018_2.ui.*

/*
This patch script was generated by TeamCity on settings change in UI.
To apply the patch, change the buildType with id = 'ReactUI_ScreenshotTests'
accordingly, and delete the patch script.
*/
changeBuildType(RelativeId("ReactUI_ScreenshotTests")) {
    failureConditions {
        remove {
            failOnMetricChange {
                metric = BuildFailureOnMetric.MetricType.BUILD_DURATION
                threshold = 3600
                units = BuildFailureOnMetric.MetricUnit.DEFAULT_UNIT
                comparison = BuildFailureOnMetric.MetricComparison.MORE
                compareTo = value()
                stopBuildOnFailure = true
                param("anchorBuild", "lastSuccessful")
            }
        }
    }
}
