<template>
  <div class="col-lg-4 col-xxl-3 mb-4 mb-lg-0">
    <div class="border rounded-10 text-center py-4 d-flex flex-column mb-4 mt-4 mt-lg-0">
      <h3 class="font-semi-bold font-size-16 font-size-lg-20 mb-2" id="user_name"></h3>
      <div class="d-flex align-items-center justify-content-center">
        <div class="icon icon-25 me-2"><img src="@/assets/images/flag.png" alt="" /></div>
        <h5 class="text-gray" id="user_phone"></h5>
      </div>
    </div>
    <div class="border rounded-10 py-3">
      <ul class="nav-links">
        <li><router-link to="/account">Account setting</router-link></li>
        <li><router-link to="/address">Addresses</router-link></li>
        <li><router-link to="/payment">Payment methods</router-link></li>
        <li><router-link to="/parcels-bills">Parcel Details</router-link></li>
        <li><router-link to="/coupon">Get coupon code</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    access: async function () {
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
      document.getElementById('user_name').innerText = data[0].first_name + ' ' + data[0].last_name
      document.getElementById('user_phone').innerText = data[0].phone
    }
  },
  mounted () {
    this.access()
  }
}

</script>
