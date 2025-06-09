<template><!-- TODO ARQUIVO .VUE iniciar com template-->
<!-- PARA QUE ARQV SEJA ACESSÍVEL É PRECISO CRIAR UMA ROTA
  em "router"→ router.js -->

<!-- alt+shift+f = identar-->
 <div>
    <!-- FORMULÁRIO para os campos que vamos alterar com css nosso-->
    <q-form ref="formPessoa" @submit="cadastrar" class="bg">

    </q-form>
    <p>
        sacooooooo
    </p>
 </div>

</template>
<!-- até aqui tudo era html. agora dentro de script vamos usar a base do vue
 para usar o js-->
<script>
import { ref } from 'vue'

export default {
    name: 'CreateEditPessoa',
    setup(){// aqui é onde vamos passar para o back-end (o PessoaReq)
        // declaro uma constante pessoa
        // ref = à medida q usu digita na tela ela muda seu valor
        const pessoa = ref({
            nome : null,
            // endereco
            // tipo
            // documento
            // profissao
            // estadoCivil 
        })
        return {
            pessoa
        }// todo setup precisa de return
    }  
}
</script>