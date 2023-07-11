<template>
  <section class="section-content">
    <div class="container">
      <div class="row">
        <ProfileAccount />
        <div class="col-lg-8 col-xxl-9">
          <div class="border rounded-10 p-3 p-lg-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h4 class="text-gray font-size-14 font-size-lg-18">Edit Account setting</h4>
            </div>
            <form action="" @submit.prevent="update">
              <div class="row">
                <div class="col-lg-4">
                  <div class="form-group">
                    <label>First Name </label>
                    <input class="form-control font-medium" name="firstName" type="text" id="first_name">
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group">
                    <label>Last Name</label>
                    <input class="form-control font-medium" name="lastName" type="text" id="last_name">
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label>Email</label>
                    <input class="form-control font-medium" name="email" type="text" id="email" >
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Country</label>
                    <div class="input-icon left">
                      <input class="form-control font-medium" name="country" type="text" id="country">
                      <div class="icon">
                        <div class="symbol symbol-25"><img src="@/assets/images/flag.png" alt=""></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>City</label>
                    <input class="form-control font-medium" name="building" type="text" id="city">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Building Num.</label>
                    <input class="form-control font-medium" name="building" type="text" id="building_number" >
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Flat num.</label>
                    <input class="form-control font-medium" name="building" type="text" id="flat_number">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Address</label>
                    <input class="form-control font-medium" type="text" id="address">
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group text-end mt-lg-5">
                    <button class="btn btn-primary" type="submit" id="button"><div>Save changes</div></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProfileAccount from '@/components/account/ProfileAccount.vue'

export default {
  name: 'AddView',
  components: {
    ProfileAccount
  },
  methods: {
    find: async function () {
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
      document.getElementById('first_name').value = data[0].first_name
      document.getElementById('last_name').value = data[0].last_name
      document.getElementById('email').value = data[0].email
      document.getElementById('country').value = data[0].country
      document.getElementById('city').value = data[0].city
      document.getElementById('building_number').value = data[0].building_number
      document.getElementById('flat_number').value = data[0].flat_number
      document.getElementById('address').value = data[0].address
    },
    async update () {
      document.getElementById('button').innerHTML = `
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      `
      const res = await fetch(
        'https://www.parcelya.com/api/address.php',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ Email: document.getElementById('email').value, FName: document.getElementById('first_name').value, LName: document.getElementById('last_name').value, Country: document.getElementById('country').value, city: document.getElementById('city').value, building: document.getElementById('building_number').value, flat: document.getElementById('flat_number').value, address: document.getElementById('address').value })
        }
      )
      const data = await res.json()
      console.log(data)
      if (data === 'Updated') {
        document.getElementById('button').innerHTML = '<div>Updated</div>'
      } else {
        document.getElementById('button').innerHTML = '<div>Error</div>'
      }
    }
  },
  mounted () {
    this.find()
  }
}
</script>
