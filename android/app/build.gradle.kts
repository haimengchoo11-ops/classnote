plugins {
    id("com.android.application")
}

android {
    namespace = "com.classnote.app"
    compileSdk {
        version = release(37)
    }

    defaultConfig {
        applicationId = "com.classnote.app"
        minSdk = 26
        targetSdk = 37
        versionCode = 1
        versionName = "1.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}

dependencies {
    implementation("androidx.core:core:1.13.1")
}
