<template>
  <q-layout view="lHh Lpr lFf">
  <q-toolbar class="bg-primary text-white">
      <q-toolbar-title>
        <q-btn label="WikaWika.com" flat dense :to="{ name:'home' }"/>
      </q-toolbar-title>
      <q-btn flat round dense icon="whatshot" :to="{ name: 'login'}" />
    </q-toolbar>
    <q-toolbar class="bg-primary text-white">
      <q-btn flat dense label="Destinasi" title="Destinasi" class="q-mr-sm" :to="{ name: 'home'}" />
      <q-btn flat dense label="Event" title="Event" class="q-mr-sm" :to="{ name: 'event'}"/>
      <q-btn flat dense label="Akomodasi" title="Akomodasi" class="q-mr-sm" :to="{ name: 'akomodasi'}" />
    </q-toolbar>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
