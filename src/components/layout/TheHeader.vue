<template>
  <div>
    <header class="main-header">
      <div class="container">
        <div class="d-flex align-items-center">
          <div class="logo">
            <router-link to="/"><img src="@/assets/images/logo.png" alt="" /></router-link>
          </div>
          <div class="menu--mobile mx-lg-auto">
            <div class="menu-container d-flex align-items-center justify-content-between d-lg-none px-3 border-bottom py-2 mb-3">
              <div class="logo">
                <router-link to="/"><img src="@/assets/images/logo.png" alt="" /></router-link>
              </div>
              <div class="btn-close-header-mobile justify-content-end">
                <i class="fa-solid fa-xmark fa-xl"></i>
              </div>
            </div>
            <div class="menu-container mx-auto menu-nav">
              <ul v-if="this.authenticated" class="main-menu">
                <li class="menu_item"><router-link to="/" class="menu_link">Home</router-link></li>
                <li class="menu_item"><router-link to="/parcel-details" class="menu_link">New Parcel</router-link></li>
                <li class="menu_item"><router-link to="/tracking" class="menu_link">Tracking</router-link></li>
              </ul>
              <ul v-else></ul>
              <!-- <ul v-else class="main-menu">
                <li class="menu_item"><router-link to="/" class="menu_link">Home</router-link></li>
                <li class="menu_item"><router-link to="/parcel-details" class="menu_link">New Parcel</router-link></li>
                <li class="menu_item"><router-link to="/tracking" class="menu_link">Tracking</router-link></li>
              </ul> -->
            </div>
            <div class="menu-container col-auto">
              <div v-if="this.authenticated">
                <ul class="d-flex flex-row justify-content-space-around">
                  <li style="margin-right: 28px">
                    <div style="margin-top: 6px" @click="account">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style="color: #35498E">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                      </svg>
                    </div>
                  </li>
                  <li> <a class="btn btn-blue" @click="logout">Logout</a></li>
                </ul>
              </div>
              <ul v-else class="main-menu d-lg-flex align-items-lg-center">
                <!-- <li class="menu_item dropdown dropdown-lang">
                  <b-dropdown right variant="link p-0" toggle-class="text-decoration-none" no-caret>
                    <template #button-content>
                      <span class="menu_link">
                        En
                        <i class="fa-solid fa-chevron-down ms-1"></i>
                      </span>
                    </template>
                    <b-dropdown-item href="/" active>English</b-dropdown-item>
                    <b-dropdown-item href="/">العربية</b-dropdown-item>
                  </b-dropdown>
                </li> -->
                <li class="menu_item">
                  <a class="menu_link text-dark" @click="$bvModal.show('bv-modal-login')">Login</a>
                </li>
                <li class="menu_item mx-lg-3"><a class="btn btn-blue" @click="$bvModal.show('bv-modal-register')">Create account</a></li>
              </ul>
            </div>
          </div>
          <div class="header-mobile__toolbar ms-auto d-lg-none fa-lg">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
    <b-modal content-class="border rounded-20 overflow-hidden" body-class="p-0" id="bv-modal-login" centered hide-header hide-footer>
      <div class="modal-inner py-4">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h3 class="mb-2 font-medium modal-title">Welcome to Parcelya</h3>
            <h6 class="mb-3 text-gray">Login and check your updates</h6>
            <button class="btn-close" id="login-close-button" type="button" @click="$bvModal.hide('bv-modal-login')"></button>
            <form action="" @submit.prevent="login">
              <div class="form-group">
                <label v-if="loginEmailValid" style="color: red">Enter Valid Email</label>
                <label v-else-if="loginalreadyEmailValid" style="color: red">Email Not Registered</label>
                <label v-else>Email*</label>
                <input class="form-control" v-model="loginEmail" type="text" placeholder="Phone number or email" />
              </div>
              <div class="form-group">
                <label v-if="loginPasswordValid" style="color: red">Enter Password of 6-18 char </label>
                <label v-else-if="loginincorrectPassword" style="color: red">Password incorrect</label>
                <label v-else>Password*</label>
                <div class="input-icon right">
                  <input :type="fieldType" v-model="loginPassword" class="form-control" placeholder="******" />
                  <div class="icon toggle-show-pass pointer" @click="obfuscateToggle">
                    <i class="fa-light fa-eye"></i>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <a>
                  <h6 @click="$bvModal.show('bv-modal-forget') & $bvModal.hide('bv-modal-login')">Forget password?</h6>
                </a>
              </div>
              <div class="form-group">
                <!-- <button class="btn btn-primary w-100">Login</button> -->
              <button @click="login" class="btn btn-primary w-100 mx-auto">
                Login
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="bg-gray text-center p-3">
        <h5>Don't have an account? <a class="text-blue pointer" @click="$bvModal.show('bv-modal-register') & $bvModal.hide('bv-modal-login')">Create new account </a></h5>
      </div>
    </b-modal>
    <b-modal content-class="border rounded-20 overflow-hidden" body-class="p-0" id="bv-modal-register" centered hide-header hide-footer>
      <div class="modal-inner py-4">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h3 class="mb-2 font-medium modal-title">Create new account</h3>
            <h6 class="mb-3 text-gray">Let's start sending parcels</h6>
            <button class="btn-close" type="button" @click="$bvModal.hide('bv-modal-register')"></button>
            <form action="" @submit.prevent="signup" >
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label v-if="signupFirstValid" style="color: red">Enter Valid First Name</label>
                    <label v-else>First Name*</label>
                    <input class="form-control" v-model="signupFirst" type="text" placeholder="First name" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Last name</label>
                    <input class="form-control" v-model="signupLast" type="text" placeholder="Last name" />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label v-if="signupPhoneValid" style="color: red">Enter valid Phone number</label>
                    <label v-else>Phone No.* </label>
                    <div class="input-group">
                      <div class="input-group-text p-0 border-0 bg-white">
                        <v-select :options="options" label="title" class="select-country" placeholder="select..">
                          <template slot="option" slot-scope="option">
                              <img :src="option.flag" />
                              {{ option.title }}
                          </template>
                        </v-select>
                      </div>
                      <input class="form-control" v-model="signupPhone" type="text" placeholder="59-0000000" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label v-if="signupEmailValid" style="color: red">Enter Valid Email</label>
                  <label v-else-if="signupEmailAlready" style="color: red">Email Already Registered</label>
                  <label v-else>Email address*</label>
                  <input class="form-control" v-model="signupEmail" type="text" placeholder="Email address" />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label v-if="signupPasswordValid" style="color: red">Enter Password between 6-18 char</label>
                  <label v-else>Password* </label>
                  <div class="input-icon right">
                    <input :type="fieldType_2" v-model="signupPassword" class="form-control" placeholder="******" />
                    <div class="icon toggle-show-pass pointer" @click="obfuscateToggle_2">
                      <i class="fa-light fa-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group d-flex flex-row">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <h6 class="text-gray mx-2">Agree to Term of use and Privacy policy</h6>
              </div>
              <button id="verify-button-enable" @click="$bvModal.show('bv-modal-verify') & $bvModal.hide('bv-modal-register')" style="display: none">a</button>
              <div class="form-group">
                <button class="btn btn-primary w-100" id="signupbutton" type="submit" ><div>Create account</div></button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="bg-gray text-center p-3">
        <h5>Already have account?  <a class="text-blue pointer" @click="$bvModal.hide('bv-modal-register') & $bvModal.show('bv-modal-login')"> Login </a></h5>
      </div>
    </b-modal>
    <b-modal content-class="border rounded-20 overflow-hidden" body-class="p-0" id="bv-modal-verify" centered hide-header hide-footer>
      <div class="modal-inner py-4">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h3 class="mb-2 font-medium modal-title">Enter the OTP </h3>
            <h6 class="mb-3 text-gray">Please enter the OTP received on registered mail. It may take a while, as we are processing many request.</h6>
            <button class="btn-close" id="verify-close-button" type="button" @click="$bvModal.hide('bv-modal-verify')"></button>
            <form action="" @submit.prevent="verify">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <input class="form-control" v-model="otpNumber" type="number" placeholder="XXX XXX" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <button class="btn btn-primary w-100" @click="verify">Verify</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="bg-gray text-center p-3">
        <h5>Already have account?  <a class="text-blue pointer" @click="$bvModal.hide('bv-modal-register') & $bvModal.show('bv-modal-login')"> Login </a></h5>
      </div>
    </b-modal>
    <b-modal content-class="border rounded-20 overflow-hidden" body-class="p-0" id="bv-modal-forget" centered hide-header hide-footer>
      <div class="modal-inner py-4">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h3 class="mb-2 font-medium modal-title">Enter your Email</h3>
            <h6 class="mb-3 text-gray">Enter your email, where you will receive link to change your password</h6>
            <button class="btn-close" id="verify-close-button" type="button" @click="$bvModal.hide('bv-modal-forget')"></button>
            <form action="" @submit.prevent="forget">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <input class="form-control" v-model="forgetMail" type="email" placeholder="example@gmail.com" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <button class="btn btn-primary w-100" id="forgetbutton"><div>Send</div></button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="bg-gray text-center p-3">
        <h5>Already have account?  <a class="text-blue pointer" @click="$bvModal.hide('bv-modal-register') & $bvModal.show('bv-modal-login')"> Login </a></h5>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { store } from '../../store'
export default {
  data () {
    return {
      loginEmail: '',
      loginEmailValid: false,
      loginalreadyEmailValid: false,
      loginPassword: '',
      loginPasswordValid: false,
      loginincorrectPassword: false,
      signupFirst: '',
      signupFirstValid: '',
      signupLast: '',
      signupEmail: '',
      signupEmailValid: false,
      signupEmailAlready: false,
      signupPassword: '',
      signupPasswordValid: false,
      signupPhone: '',
      signupPhoneValid: false,
      otpNumber: '',
      otpNumberValid: false,
      authenticated: false,
      forgetMail: '',
      fieldType: 'password',
      fieldType_2: 'password',
      options: [
        {
          title: '+972',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Palestine_Flag.svg/512px-Palestine_Flag.svg.png'
        },
        {
          title: '+973',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Palestine_Flag.svg/512px-Palestine_Flag.svg.png'
        },
        {
          title: '+971',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Palestine_Flag.svg/512px-Palestine_Flag.svg.png'
        }
      ]
    }
  },
  // routes = [{path: '/account', component: Account}],
  methods: {
    find: function () {
      if (!localStorage.getItem('login')) {
        console.log('you are in header and not login')
        this.authenticated = false
      } else {
        this.authenticated = true
      }
      console.log('the value of authenticated is: ', this.authenticated)
    },
    obfuscateToggle () {
      this.fieldType = this.fieldType === 'password' ? 'text' : 'password'
    },
    obfuscateToggle_2 () {
      this.fieldType_2 = this.fieldType_2 === 'password' ? 'text' : 'password'
    },
    async account () {
      console.log('account button was clicked')
      this.$router.push({ path: '/account' })
    },
    // function to be executed when login button is clicked
    async login () {
      console.log('the button was clicked')
      const { loginEmail, loginPassword } = this
      if (!loginEmail) {
        this.loginEmailValid = true
        return
      }
      if (!loginPassword || loginPassword.length < 6 || loginPassword.length > 18) {
        this.loginPasswordValid = true
        return
      }
      this.loginEmailValid = false
      this.loginPasswordValid = false
      const res = await fetch(
        'https://www.parcelya.com/api/login.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ Email: loginEmail, Password: loginPassword })
        }
      )
      const data = await res.json()
      console.log('the data is: ', data)
      if (data === 'No account yet') {
        this.loginalreadyEmailValid = true
        return
      }
      if (data === 'password WRONG') {
        this.loginincorrectPassword = true
        return
      }
      if (data === 'Success') {
        localStorage.setItem('login', loginEmail)
        store.status = true
        const button = document.getElementById('login-close-button')
        button.click()
        window.location.reload()
      }
    },
    // function to be executed when signup button is clicked
    async signup () {
      const { signupFirst, signupLast, signupEmail, signupPhone, signupPassword } = this
      if (!signupFirst) {
        this.signupFirstValid = true
        return
      }
      if (!signupEmail) {
        this.signupEmailValid = true
        return
      }
      if (!signupPhone || !signupPhone.length > 6) {
        this.signupPhoneValid = true
        return
      }
      if (!signupPassword || signupPassword.length < 6 || signupPassword.length > 18) {
        this.signupPasswordValid = true
        return
      }
      this.signupFirstValid = false
      this.signupEmailValid = false
      this.signupPasswordValid = false
      this.signupPhoneValid = false
      document.getElementById('signupbutton').innerHTML = `
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      `
      const res = await fetch(
        'https://www.parcelya.com/api/signup.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ FName: signupFirst, LName: signupLast, Email: signupEmail, Phone: signupPhone, Password: signupPassword })
        }
      )
      const data = await res.json()
      if (data === 'Already Registered') {
        this.signupEmailAlready = true
        document.getElementById('signupbutton').innerHTML = `
        <div>Create Account</div>
        `
        return
      }
      if (data === 'Done') {
        const button = document.getElementById('verify-button-enable')
        button.click()
        localStorage.setItem('login', signupEmail)
      }
      // ).then(async (response) => {
      //   console.log('the type of data is: ', typeof response)
      //   console.log('the value of response is: ', response)
      //   console.log('the response in data is: ', response.data)
      //   console.log('the type of data is: ', typeof JSON.stringify(response))
      //   // const res = await response.json()
      //   // console.log('the type of data is: ', typeof res)
      //   // // const res = await response.json()
      //   // console.log('the value of res is: ', res)
      //   var arr = JSON.stringify(response)
      //   console.log(arr)
      //   if (arr[arr.length - 1].trim() === 'Done') {
      //     console.log('Registration successful')
      //   }
      // })
      // const data = await res.json()
      // var arr = data.split('<br>')
      // console.log('the response is: ', arr[arr.length - 1].trim())
      // if (arr[arr.length - 1].trim() === 'Done') {
      //   console.log('Signup successfull')
      //   localStorage.setItem('login', signupEmail)
      // }
    },
    async verify () {
      const mail = localStorage.getItem('login')
      const { otpNumber } = this
      const res = await fetch(
        'https://www.parcelya.com/api/verify.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: mail, code: otpNumber })
        }
      )
      const data = await res.json()
      if (data === 'Verified') {
        const button = document.getElementById('verify-close-button')
        button.click()
      }
    },
    async logout () {
      store.status = false
      localStorage.removeItem('login')
      this.$router.push({ path: '/' })
      window.location.reload()
    },
    async forget () {
      console.log('button of forget is clicked')
      const { forgetMail } = this
      const res = await fetch(
        'https://www.parcelya.com/api/forget.php',
        {
          mode: 'no-cors',
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ Email: forgetMail })
        }
      )
      console.log(res)
    }
  },
  mounted () {
    this.find()
  }
}
</script>
