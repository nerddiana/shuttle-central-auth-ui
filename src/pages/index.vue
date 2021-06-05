<template>
    <h1>Hola {{ $store.state.session.session?.name }}, has iniciado sesión</h1>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
</route>