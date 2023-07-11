<template>
  <section class="section-content">
    <div class="container">
      <div class="row">
        <ProfileAccount />
        <div class="col-lg-8 col-xxl-9">
          <div class="border rounded-10 p-3 p-lg-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h4 class="text-gray font-size-14 font-size-lg-18">{{ count }} Saved Addresses</h4>
              <router-link to="/address-add" class="btn btn-link-green px-2 d-flex align-items-center">
                <i class="fa-regular fa-plus me-1 fa-lg"></i>
                Add new addresses
              </router-link>
            </div>
            <AddressSaved />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import ProfileAccount from '@/components/account/ProfileAccount'
import AddressSaved from '@/components/address/AddressSaved'

export default {
  name: 'IndexView',
  components: {
    ProfileAccount,
    AddressSaved
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    find: async function () {
      const email = localStorage.getItem('login')
      const res = await fetch('https://www.parcelya.com/api/get-address.php', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ email: email })
      })
      const data = await res.json()
      this.count = data.length
    },
    find1: function () {
      if (!localStorage.getItem('login')) {
        console.log('no login credentials available')
        this.$router.push({ path: '/' })
      }
    }
  },
  mounted () {
    this.find()
    this.find1()
  }
}

</script>
