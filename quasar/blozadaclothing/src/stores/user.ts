import { defineStore } from 'pinia'

const useUserStore = () => {
  return defineStore('useUserStore', {

    state: () => ({
      firstTime: null,

      userProfile: {first_name: '', first_surname: '', second_surname: '', birthdate: '', phone_number: ''},
      completedProfile: false,

      user2ndInformation: {second_phone_number: '', second_email: ''},
      completedUser2ndInformation: false,

      userAddresses: [],
      addressFilled: false,

      userBillingAddress: [],
      billingAddressFilled: false,

    }),

    actions: {
    },
    getters: {
    },
})()
}

export {useUserStore};
