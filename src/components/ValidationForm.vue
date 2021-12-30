<template>
  <h2>Validation Form</h2>
  <form @submit="validateForm" method="post" action="send.html">
    <div class="errors-list">
      <div class="error" v-for="error in errors" :key="error.id">
        <p>{{ error }}</p>
      </div>
    </div>
    <div class="form-group">
      <label>username</label>
      <input type="text" v-model="user" class="form-control" />
    </div>
    <div class="form-group">
      <label>subject</label>
      <input type="text" v-model="subject" class="form-control" />
    </div>
    <div class="form-group">
      <label>message</label>
      <textarea
        type="text"
        v-model="message"
        class="form-control"
        rows="5"
      ></textarea>
    </div>
    <div class="form-group">
      <input type="submit" value="send" class="btn btn-primary" />
    </div>
  </form>
</template>
<script>
export default {
  data: function () {
    return {
      errors: [],
      user: "",
      subject: "",
      message: "",
      maxChars: 10,
    };
  },
  methods: {
    validateForm: function (e) {
      // empty errors to start fresh
      this.errors = [];

      // check if username empty
      if (!this.user) {
        this.errors.push("username can't be empty");
      }

      // check if username more than 10 chars
      if (this.user && this.user.length > this.maxChars) {
        this.errors.push(
          `username can't be more than ${this.maxChars} characters`
        );
      }

      // check if subject empty
      if (!this.subject) {
        this.errors.push("subject can't be empty");
      }

      // check if subject message
      if (!this.message) {
        this.errors.push("message can't be empty");
      }

      // if no errors return true
      if (!this.errors.length) {
        return true;
      }
      e.preventDefault();
    },
  },
  name: "ValidateForm",
};
</script>
<style scoped lang="scss">
form {
  width: 80%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  .errors-list p {
    background-color: #efd9b2;
    padding: 15px;
    color: #932d0e;
  }
  .form-group {
    margin-bottom: 20px;
  }
  textarea {
    resize: none;
  }
}
</style>
