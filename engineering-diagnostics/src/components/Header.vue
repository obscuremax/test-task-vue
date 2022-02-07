<template>
  <div class="wrapper">
    <header class="header">
      <div class="container header__container">
        <div class="header__block">
          <Menu :menu="MENU" class="header__menu" />
          <Logo :logo="LOGO" class="header__logo" />
        </div>

        <div class="header__contacts">
          <Contact
            v-for="contact in CONTACTS"
            :contact="contact"
            :key="contact.id"
            :imgTitle="contact.imgTitle"
            :imgDescr="contact.imgDescr"
          />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Logo from "@/components/Logo";
import Contact from "@/components/Contact";
import { mapGetters } from "vuex";
export default {
  components: {
    Menu,
    Logo,
    Contact,
  },
  computed: {
    ...mapGetters(["MENU", "LOGO", "CONTACTS"]),
  },
};
</script>