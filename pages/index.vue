<template>
  <div class="pt-24">
    <ContentDoc class="prose" />
    <h2>Contact Form</h2>
    <form
      netlify
      method="post"
      name="Contact"
      action="/thankyou"
      @submit.prevent="sendForm"
      data-netlify-recaptcha="true"
      data-netlify-honeypot="bot-field"
      class="bg-gray-200 p-16 mt-16 rounded flex flex-col justify-center align-middle"
    >
      <input
        class="hidden"
        name="hpfield"
      />
      <p>
        <label
          for="name"
          class="text-gray-800"
        >
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          class="form-input block w-full text-black p-3 mt-3 rounded"
        />
      </p>
      <p>
        <label
          for="email"
          class="text-gray-800"
        >
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          class="form-input block w-full text-black p-3 mt-3 rounded"
        />
      </p>
      <div data-netlify-recaptcha="true"></div>
      <p>
        <button
          type="submit"
          class="text-white w-full mt-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 place-self-center"
        >
          Submit
        </button>
      </p>
    </form>
  </div>
</template>

<script setup>
useHead({
  script: [
    { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
  ],
})
// https://snipcart.com/blog/netlify-forms
async function sendForm(e) {
  let formData = new FormData()
  console.log({
    name: e.target[1].value,
    email: e.target[2].value,
  })

  formData.append('name', e.target[1].value)
  formData.append('email', e.target[2].value)
  formData.append('form-name', 'Contact')
  var options = { method: 'POST', body: formData, content: formData }

  let resp = await fetch('/', options)
  console.log({
    name: formData.get('name'),
    email: formData.get('email'),
  })
  alert('Submitted!')
}
</script>
