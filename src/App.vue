<script setup>
import {  RouterView } from 'vue-router'
</script>

<template>
<div class="container">
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">
        <RouterLink :to="`/`">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16" >
          <path d="M15.62,1.825H4.379v1.021h0.13c-0.076,0.497-0.13,1.005-0.13,1.533c0,3.998,2.246,7.276,5.11,7.629v5.145
								H7.445c-0.282,0-0.511,0.229-0.511,0.512s0.229,0.511,0.511,0.511h5.109c0.281,0,0.512-0.229,0.512-0.511s-0.23-0.512-0.512-0.512
								h-2.043v-5.145c2.864-0.353,5.109-3.631,5.109-7.629c0-0.528-0.054-1.036-0.129-1.533h0.129V1.825z M10,11.087
								c-2.586,0-4.684-3.003-4.684-6.707c0-0.53,0.057-1.039,0.138-1.533h9.092c0.081,0.495,0.139,1.003,0.139,1.533
								C14.685,8.084,12.586,11.087,10,11.087z"/>
        </svg> 
        </RouterLink>
        Miracle
      </a>
    </div>
  </nav><hr>

  <RouterView />
  
</div>
</template>