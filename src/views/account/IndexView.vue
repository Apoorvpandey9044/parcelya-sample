<template>
  <section class="section-content">
    <div class="container">
      <div class="row">
        <ProfileAccount />
        <div class="col-lg-8 col-xxl-9">
          <div class="border rounded-10 p-3 p-lg-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h4 class="text-gray font-size-14 font-size-lg-18">Account setting</h4>
              <router-link to="/account-edit" class="btn btn-link-green px-2">
                <svg class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2071 4.20733C18.4174 3.99705 18.7026 3.87891 19 3.87891C19.1473 3.87891 19.2931 3.90791 19.4291 3.96426C19.5652 4.02061 19.6888 4.10321 19.7929 4.20733C19.897 4.31146 19.9796 4.43507 20.036 4.57112C20.0923 4.70716 20.1213 4.85297 20.1213 5.00023C20.1213 5.14748 20.0923 5.29329 20.036 5.42934C19.9796 5.56538 19.897 5.689 19.7929 5.79312L7.48877 18.0973L5.37439 18.6259L5.90299 16.5115L18.2071 4.20733ZM19 1.87891C18.1722 1.87891 17.3783 2.20776 16.7929 2.79312L4.29291 15.2931C4.16476 15.4213 4.07384 15.5819 4.02988 15.7577L3.02988 19.7577C2.94468 20.0985 3.04453 20.459 3.29291 20.7073C3.54129 20.9557 3.90178 21.0556 4.24256 20.9704L8.24256 19.9704C8.41839 19.9264 8.57897 19.8355 8.70713 19.7073L21.2071 7.20733C21.497 6.91749 21.7269 6.5734 21.8837 6.1947C22.0406 5.81601 22.1213 5.41012 22.1213 5.00023C22.1213 4.59033 22.0406 4.18444 21.8837 3.80575C21.7269 3.42705 21.497 3.08296 21.2071 2.79312C20.9173 2.50328 20.5732 2.27336 20.1945 2.1165C19.8158 1.95964 19.4099 1.87891 19 1.87891ZM13 19.0002C12.4477 19.0002 12 19.448 12 20.0002C12 20.5525 12.4477 21.0002 13 21.0002H22C22.5523 21.0002 23 20.5525 23 20.0002C23 19.448 22.5523 19.0002 22 19.0002H13Z" fill="#28A745"></path>
                </svg>
                Edit
              </router-link>
            </div>
            <div class="row mb-4">
              <div class="col-5 col-lg-3">
                <h5 class="font-size-14 font-size-lg-16">First Name</h5>
              </div>
              <div class="col-7 col-lg-9">
                <h5 class="font-size-14 font-size-lg-16 text-gray" id="first_name"></h5>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-5 col-lg-3">
                <h5 class="font-size-14 font-size-lg-16">Last Name</h5>
              </div>
              <div class="col-7 col-lg-9">
                <h5 class="font-size-14 font-size-lg-16 text-gray" id="last_name"></h5>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-5 col-lg-3">
                <h5 class="font-size-14 font-size-lg-16">Email</h5>
              </div>
              <div class="col-7 col-lg-9">
                <h5 class="font-size-14 font-size-lg-16 text-gray" id="email"></h5>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-5 col-lg-3">
                <h5 class="font-size-14 font-size-lg-16">Country</h5>
              </div>
              <div class="col-7 col-lg-9">
                <h5 class="font-size-14 font-size-lg-16 text-gray" id="country"></h5>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-5 col-lg-3">
                <h5 class="font-size-14 font-size-lg-16">City</h5>
              </div>
              <div class="col-7 col-lg-9">
                <h5 class="font-size-14 font-size-lg-16 text-gray" id="city"></h5>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-5 col-lg-3">
                <h5 class="font-size-14 font-size-lg-16">Building Num.</h5>
              </div>
              <div class="col-7 col-lg-9">
                <h5 class="font-size-14 font-size-lg-16 text-gray" id="building_number"></h5>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-5 col-lg-3">
                <h5 class="font-size-14 font-size-lg-16">Flat num.</h5>
              </div>
              <div class="col-7 col-lg-9">
                <h5 class="font-size-14 font-size-lg-16 text-gray" id="flat_number"></h5>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-5 col-lg-3">
                <h5 class="font-size-14 font-size-lg-16">Address</h5>
              </div>
              <div class="col-7 col-lg-9">
                <h5 class="font-size-14 font-size-lg-16 text-gray" id="address"></h5>
              </div>
            </div>
            <!-- <div class="row mb-4">
              <div class="col-5 col-lg-3">
                <h5 class="font-size-14 font-size-lg-16">Password</h5>
              </div>
              <div class="col-7 col-lg-9">
                <h5 class="font-size-14 font-size-lg-16"><a class="text-blue" href="">Change Password </a></h5>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import ProfileAccount from '@/components/account/ProfileAccount'
import { store } from '../../store'

export default {
  name: 'IndexView',
  components: {
    ProfileAccount
  },
  methods: {
    find: async function () {
      console.log(store.status)
      if (!localStorage.getItem('login')) {
        console.log('no login credentials available')
        this.$router.push({ path: '/' })
      } else {
        const res = await fetch(
          'https://www.parcelya.com/api/account.php',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Email: localStorage.getItem('login') })
          }
        )
        const data = await res.json()
        document.getElementById('first_name').innerText = data[0].first_name
        document.getElementById('last_name').innerText = data[0].last_name
        document.getElementById('email').innerText = data[0].email
        if (data[0].address === '') {
          document.getElementById('address').innerHTML = '<p style="opacity: 0.4">please edit your information</p>'
          document.getElementById('building_number').innerHTML = '<p style="opacity: 0.4">please edit your information</p>'
          document.getElementById('flat_number').innerHTML = '<p style="opacity: 0.4">please edit your information</p>'
          document.getElementById('city').innerHTML = '<p style="opacity: 0.4">please edit your information</p>'
          document.getElementById('country').innerHTML = '<p style="opacity: 0.4">please edit your information</p>'
        } else {
          document.getElementById('address').innerText = data[0].address
          document.getElementById('building_number').innerText = data[0].building_number
          document.getElementById('flat_number').innerText = data[0].flat_number
          document.getElementById('city').innerText = data[0].city
          document.getElementById('country').innerText = data[0].country
        }
      }
    }
  },
  mounted () {
    // if (!localStorage.getItem('login')) {
    //   console.log('not autheticated', this.authenticated)
    // }
    this.find()
  }
}

</script>
