<template>
  <section class="section-content">
    <div class="container">
      <div class="row">
        <ProfileAccount />
        <div class="col-lg-8 col-xxl-9">
          <div class="border rounded-10 p-3 p-lg-4">
            <div class="d-lg-flex align-items-center justify-content-between mb-4">
              <h4 class="text-gray font-size-14 font-size-lg-18">Parcels details</h4>
              <div class="col-lg-4 col-xxl-3">
                <v-select :options="options" placeholder="Select a Country"></v-select>
              </div>
            </div>
            <Bills/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import ProfileAccount from '@/components/account/ProfileAccount'
import Bills from '@/components/bills/billsSaved'

export default {
  name: 'IndexView',
  components: {
    ProfileAccount,
    Bills
  },
  data () {
    return {
      options: [
        'foo',
        'bar',
        'baz'
      ],
      id: 0,
      date: '',
      senderFirst: '',
      senderLast: '',
      senderAddress: '',
      receiverFirst: '',
      receiverLast: '',
      receiverAddress: ''
    }
  },
  methods: {
    find: function () {
      if (!localStorage.getItem('login')) {
        console.log('no login credentials available')
        this.$router.push({ path: '/' })
      }
    }
  },
  mounted () {
    this.find()
  }
}

</script>
