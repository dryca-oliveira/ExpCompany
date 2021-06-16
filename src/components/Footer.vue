<template>
  <footer>
    <v-container fluid class="d-flex flex-column align-center px-0">
      <v-img width="160" src="@/assets/footer-logo.png"></v-img>
      <div class="mt-6">
        <a href=""> <v-icon color="#2A28B7"> fab fa-facebook</v-icon></a>
        <a href=""> <v-icon color="#2A28B7"> fab fa-instagram</v-icon></a>
        <a href=""> <v-icon color="#2A28B7"> fab fa-linkedin</v-icon></a>
      </div>
      <div class="copyright white--text">EXPCOMPANY © 2018 - 2021</div>
    </v-container>
  </footer>
</template>

<script>
export default {};
</script>

<style  scoped>
.container {
  padding: 80px 12px 0px;
}
a {
  padding-right: 24px;
}
.copyright {
  background: #2a28b7;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  margin-top: 80px;
}
</style>>
