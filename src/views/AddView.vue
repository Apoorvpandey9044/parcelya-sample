<template>
  <section class="section-content">
    <div class="container">
      <div class="row">
        <ProfileAccount />
        <div class="col-lg-8 col-xxl-9 wow fadeInUp" data-wow-delay="0.3s">
          <div class="border rounded-10 p-3 p-lg-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h4 class="text-gray font-size-14 font-size-lg-18">Addresses</h4>
            </div>
            <form action="" @submit.prevent="add">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Country</label>
                    <div class="input-icon left">
                      <input id="country" class="form-control font-medium" name="country" type="text" value="United Arab Emirates">
                      <div class="icon">
                        <div class="symbol symbol-25"><img src="@/assets/images/flag.png" alt=""></div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="col-lg-6">
                  <div class="form-group">
                    <label>Country</label>
                    <v-select :options="options" placeholder="Select a Country"></v-select>
                  </div>
                </div> -->
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Region</label>
                    <input id="region" class="form-control font-medium" name="address" type="text" placeholder="Region">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Street</label>
                    <input id="street" class="form-control font-medium" name="address" type="text" placeholder="Address">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Address</label>
                    <input id="address" class="form-control font-medium" name="address" type="text" placeholder="Address">
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group">
                    <label>Building Num.</label>
                    <input id="building_number" class="form-control font-medium" name="building" type="text" placeholder="ex: G-2500">
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group">
                    <label>Floor num. </label>
                    <input id="floor_number" class="form-control font-medium" name="floor" type="text" placeholder="ex: G-2500">
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group">
                    <label>Flat num.</label>
                    <input id="flat_number" class="form-control font-medium" name="flat" type="text" placeholder="ex: G-2500">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Address Label</label>
                    <input id="address_label" class="form-control font-medium" name="addressLabel" type="text" placeholder="Work, home, store,..etc">
                    <small class="d-block">You will acess this address using this label</small>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group text-end mt-lg-5">
                    <button class="btn btn-primary px-4" type="submit">Save</button>
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
    add: async function () {
      const res = await fetch(
        'https://www.parcelya.com/api/address-add.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ country: document.getElementById('country').value, region: document.getElementById('region').value, street: document.getElementById('street').value, address: document.getElementById('address').value, building_number: document.getElementById('building_number').value, flat_number: document.getElementById('flat_number').value, floor_number: document.getElementById('floor_number').value, address_label: document.getElementById('address_label').value, email: localStorage.getItem('login') })
        }
      )
      const data = await res.json()
      console.log(data)
    }
  }
}
</script>
