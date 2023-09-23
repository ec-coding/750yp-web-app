package com.example.medlista.android

import android.content.Context
import android.content.Intent
import android.os.Bundle
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
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.blur
import androidx.compose.ui.draw.clip
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.medlista.android.ui.theme.MedlistaTheme
import com.example.medlista.android.ui.theme.darkgray
import com.example.medlista.android.ui.theme.primary

class LoginActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MedlistaTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    LoginView()
                }
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun LoginViewPreview() {
    MedlistaTheme {
        LoginView()
    }
}

@Composable
fun LoginView() {

    var username by remember {
        mutableStateOf("")
    }
    var password by remember {
        mutableStateOf("")
    }

    var showProgress by remember { mutableStateOf(false) }

    val context = LocalContext.current

    val loginViewModel = viewModel<LoginViewModel>()

    loginViewModel.loginStatus.observeAsState(false).apply {
        if (this.value) {
            showProgress = false
            NavigateToHome()
        }
    }

    loginViewModel.alreadyLoggedIn.observeAsState(false).apply {
        if (this.value) {
            NavigateToHome()
        }
    }

    Box(modifier = Modifier.fillMaxSize()) {
//        androidx.compose.foundation.Image(
//            painter = painterResource(id = R.drawable.pills),
//            contentDescription = "Image of medication pills.",
//            modifier = Modifier
//                .fillMaxSize()
//                .blur(4.dp),
//            contentScale = ContentScale.Crop
//        )

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
            LoginHeader()
            LoginFields(username, password,
                onUsernameChange = {
                    username = it
                }, onPasswordChange = {
                    password = it
                }, onForgotPasswordClick = {

                })

            LoginFooter(
                onSignInClick = {
                    showProgress = true
                    loginViewModel.doLogin(username, password)
                },
                onSignUpClick = {
                    showProgress = true
                    navigateToRegister(context)
                }
            )
        }
    }
}

@Composable
fun LoginHeader() {
    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Text(text = "Welcome Back", fontSize = 36.sp, fontWeight = FontWeight.ExtraBold, color = primary)
        Text(text = "Sign in to continue", fontSize = 18.sp, fontWeight = FontWeight.SemiBold, color = darkgray)
    }
}

@Composable
fun ColumnScope.LoginFields(
    username: String,
    password: String,
    onUsernameChange: (String) -> Unit,
    onPasswordChange: (String) -> Unit,
    onForgotPasswordClick: () -> Unit
) {
    Column() {
        InputField(
            value = username,
            label = "Username",
            placeholder = "Enter your email address",
            onValueChange = onUsernameChange,
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Email, imeAction = ImeAction.Next),
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
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password, imeAction = ImeAction.Go),
            leadingIcon = {
                Icon(Icons.Default.Lock, contentDescription = "Password")
            }
        )
        TextButton(onClick = onForgotPasswordClick, modifier = Modifier.align(Alignment.End)) {
            Text(text = "Forgot Password?")
        }
    }
}

@Composable
fun LoginFooter(
    onSignInClick: () -> Unit,
    onSignUpClick: () -> Unit
) {
    val context = LocalContext.current

    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Button(onClick = onSignInClick, modifier = Modifier.fillMaxWidth()) {
            Text(text = "Sign In")
        }
        TextButton(onClick = onSignUpClick) {
            Text(text = "Don't have an account, click here")
        }
        Spacer(modifier = Modifier.padding(bottom = 50.dp))

    }
}

// making a reusable component so we can use it for any field
@Composable
fun InputField(
    value: String,
    label: String,
    placeholder: String,
    visualTransformation: VisualTransformation = VisualTransformation.None,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    leadingIcon: @Composable (() -> Unit)? = null,
    trailingIcon: @Composable (() -> Unit)? = null,
    onValueChange: (String) -> Unit
) {
    OutlinedTextField(
        value = value,
        onValueChange = onValueChange,
        label = {
            Text(text = label)
        },
        placeholder = {
            Text(text = placeholder)
        },
        visualTransformation = visualTransformation,
        keyboardOptions = keyboardOptions,
        leadingIcon = leadingIcon,
        trailingIcon = trailingIcon
    )
}

@Composable
fun NavigateToHome() {
    val context = LocalContext.current
    context.startActivity(Intent(context, HomeScreen::class.java))
}

fun navigateToRegister(context: Context) {
    context.startActivity(Intent(context, RegisterActivity::class.java))
}
