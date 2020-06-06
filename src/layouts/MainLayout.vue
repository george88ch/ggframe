<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-space></q-space>
        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          icon-right="account_circle"
          label="Register"
          class="float-right"
        />

        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          icon-right="account_circle"
          label="Login"
          class="float-right"
        />

        <q-btn
          v-if="loggedIn"
          @click="logoutUser"
          flat
          icon-right="account_circle"
          label="Logout"
          class="float-right q-mr-5"
        />

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
      <div class="row">
        <q-tabs align="left">
          <q-route-tab to="/page1" label="Page One" />
          <q-route-tab to="/page2" label="Page Two" />
          <q-route-tab to="/page3" label="Page Three" />
        </q-tabs>
        <q-space></q-space>
        <p class="float-right q-mr-md q-mt-md">
          Hallo, <b>{{ loggedInUser }}</b>
        </p>
      </div>
    </q-header>

    <q-drawer v-model="left" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer v-model="right" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          &copy; george 2020
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      left: false,
      right: false
    };
  },
  computed: {
    ...mapState("auth", ["loggedIn", "loggedInUser", "loggedInUserId"])
  },
  methods: {
    ...mapActions("auth", ["logoutUser"])
  }
};
</script>
