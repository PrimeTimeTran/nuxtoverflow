<template>
  <div class="pt-24">
    <ContentDoc class="prose dark:prose-invert" />
    <!-- <iframe
      class="mb-6 w-full"
      height="600"
      src="https://cdn.forms-content-1.sg-form.com/d37f8368-7809-11ee-a6ab-9e66f5c4b6c4"
    /> -->
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
