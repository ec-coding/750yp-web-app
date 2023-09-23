package com.example.medlista.android

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CutCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Lock
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.medlista.android.ui.theme.MedlistaTheme
import com.example.medlista.android.ui.theme.darkgray
import com.example.medlista.android.ui.theme.primary

class RegisterActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MedlistaTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    RegisterView()
                }
            }
        }
    }
}

@Composable
fun RegisterView() {

    var username by remember {
        mutableStateOf("")
    }
    var usernameConfirm by remember {
        mutableStateOf("")
    }
    var password by remember {
        mutableStateOf("")
    }
    var passwordConfirm by remember {
        mutableStateOf("")
    }
    var showProgress by remember { mutableStateOf(false) }

    Box(modifier = Modifier.fillMaxSize()) {

        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp)
                .alpha(0.5f)
                .clip(
                    CutCornerShape(
                        topStart = 8.dp,
                        topEnd = 16.dp,
                        bottomStart = 16.dp,
                        bottomEnd = 8.dp
                    )
                )
                .background(MaterialTheme.colors.background)
        )

        Column(
            Modifier
                .fillMaxSize()
                .padding(48.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.SpaceAround
        ) {
            RegisterHeader()
            RegisterFields(
                username = username,
                usernameConfirm = usernameConfirm,
                password = password,
                passwordConfirm = passwordConfirm,
                onUsernameChange = { username = it },
                onPasswordChange = { password = it },
                onUsernameConfirmChange = { usernameConfirm = it },
                onPasswordConfirmChange = { passwordConfirm = it }
            )
        }

    }

}

@Composable
fun RegisterHeader() {
    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Text(text = "Welcome", fontSize = 36.sp, fontWeight = FontWeight.ExtraBold, color = primary)
        Text(
            text = "Please create an account below",
            fontSize = 18.sp,
            fontWeight = FontWeight.SemiBold,
            color = darkgray
        )
    }
}

@Composable
fun ColumnScope.RegisterFields(
    username: String,
    usernameConfirm: String,
    password: String,
    passwordConfirm: String,
    onUsernameChange: (String) -> Unit,
    onPasswordChange: (String) -> Unit,
    onUsernameConfirmChange: (String) -> Unit,
    onPasswordConfirmChange: (String) -> Unit
) {
    val registerViewModel = viewModel<RegisterViewModel>()

    Column() {
        InputField(
            value = username,
            label = "Email",
            placeholder = "Enter your email address",
            onValueChange = onUsernameChange,
            keyboardOptions = KeyboardOptions(
                keyboardType = KeyboardType.Email,
                imeAction = ImeAction.Next
            ),
            leadingIcon = {
                Icon(Icons.Default.Email, contentDescription = "Email")
            }
        )
        Spacer(modifier = Modifier.height(8.dp))
        InputField(
            value = usernameConfirm,
            label = "Confirm Email",
            placeholder = "Please confirm email",
            onValueChange = onUsernameConfirmChange,
            keyboardOptions = KeyboardOptions(
                keyboardType = KeyboardType.Email,
                imeAction = ImeAction.Next
            ),
            leadingIcon = {
                Icon(Icons.Default.Email, contentDescription = "Email")
            }
        )
        Spacer(modifier = Modifier.height(8.dp))
        InputField(
            value = password,
            label = "Password",
            placeholder = "Enter your password",
            onValueChange = onPasswordChange,
            visualTransformation = PasswordVisualTransformation(),
            keyboardOptions = KeyboardOptions(
                keyboardType = KeyboardType.Password,
                imeAction = ImeAction.Go
            ),
            leadingIcon = {
                Icon(Icons.Default.Lock, contentDescription = "Password")
            }
        )
        Spacer(modifier = Modifier.height(8.dp))
        InputField(
            value = passwordConfirm,
            label = "Confirm Password",
            placeholder = "Enter your password",
            onValueChange = onPasswordConfirmChange,
            visualTransformation = PasswordVisualTransformation(),
            keyboardOptions = KeyboardOptions(
                keyboardType = KeyboardType.Password,
                imeAction = ImeAction.Go
            ),
            leadingIcon = {
                Icon(Icons.Default.Lock, contentDescription = "Password")
            }
        )
        Spacer(modifier = Modifier.height(16.dp))

        val context = LocalContext.current
        Button(onClick = {
            Toast.makeText(context, "You have registered. Please login.", Toast.LENGTH_LONG).show()
            registerViewModel.register(username, password)
            navigateToLoginView(context)
        }, modifier = Modifier.align(Alignment.End)) {
            Text(text = "Register")
        }
        Spacer(modifier = Modifier.height(30.dp))
    }
}

private fun navigateToLoginView(context: Context) {
    context.startActivity(Intent(context, LoginActivity::class.java))
}

@Preview(showBackground = true)
@Composable
fun RegisterViewPreview() {
    MedlistaTheme {
        RegisterView()
    }
}
