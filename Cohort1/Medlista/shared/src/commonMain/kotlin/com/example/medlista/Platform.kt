package com.example.medlista

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform
