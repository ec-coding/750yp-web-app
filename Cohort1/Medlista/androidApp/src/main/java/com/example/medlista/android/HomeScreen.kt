package com.example.medlista.android

import android.content.Context
import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel

class HomeScreen : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            MyApplicationTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    HomeView()
                }
            }
        }
    }
}

@Composable
fun HomeView() {

    val context = LocalContext.current
    val profileVM: ProfileViewModel = viewModel()

    Spacer(modifier = Modifier.padding(vertical = 8.dp))

    Text(
        text = "Logout",
        modifier = Modifier
            .padding(horizontal = 8.dp)
            .clickable {
                profileVM.onLogout()
                goToLogin(context)
            }
    )
}

@Preview
@Composable
fun HomeViewPreview() {
    MyApplicationTheme {
        HomeView()
    }
}

private fun goToLogin(context: Context) {
    context.startActivity(Intent(context, LoginActivity::class.java))
}
