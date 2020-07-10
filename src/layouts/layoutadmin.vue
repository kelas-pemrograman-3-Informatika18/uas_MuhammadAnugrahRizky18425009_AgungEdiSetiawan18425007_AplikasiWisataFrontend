<template>
  <q-layout view="lHh Lpr lFf">
  <q-toolbar class="bg-primary text-white">
      <q-toolbar-title>wikawika.com</q-toolbar-title>
      <div class="flex-center q-mr-xl">
      <q-btn flat label="Input Event" :to="{ name: 'homeadmin' }" />
      <q-btn flat label="Input Tempat Wisata" :to="{ name: 'datawisata' }" />
      </div>
      <q-btn flat round dense label="logout" :to="{ name: 'home'}" />
    </q-toolbar>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
