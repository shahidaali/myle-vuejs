<template>
  <footer class="footer px-4">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <ul class="nav nav-footer justify-content-center justify-content-lg-start">
          <li class="nav-item">
            <a href="#" class="nav-link" target="_blank">About Us</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" target="_blank">Privacy Policy</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" target="_blank">Terms & Conditions</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-right text-muted">
          MYLE, LLC © {{year}}
        </div>
      </div>
      
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
