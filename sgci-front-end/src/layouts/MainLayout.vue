<!-- Todos as outras alterações estão em quasar.config.js-->
 <template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          SGCI - Sistema Gerenciador de Cadastro Imobiliário <!-- aqui é o título em azul-->
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu <!-- aqui é onde inicia o menu e mudamos o nome-->
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [// aqui são os links do menu
  {
    title: 'Gerenciar Pessoas',
    caption: 'Físicas e Jurídicas',// descrição no menu
    icon: 'group', // explicação de como mudar o ícone em quasar.config.js
    link: 'https://quasar.dev'
  },
  {
    title: 'Gerenciar Imóveis',
    caption: 'Rurais e Urbanos',
    icon: 'other_houses',
    link: 'https://github.com/quasarframework',
    disable: true,
  },
  {
    title: 'Gerenciar Acessos',
    caption: 'Usuários e Perfis',
    icon: 'manage_accounts',
    link: 'https://chat.quasar.dev',
    disable: true, // desabilita o botão. enquanto não tem programação
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
