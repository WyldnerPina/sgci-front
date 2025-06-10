<template><!-- TODO ARQUIVO .VUE iniciar com template-->
<!-- PARA QUE ARQV SEJA ACESSÍVEL É PRECISO CRIAR UMA ROTA
  em "router"→ router.js -->

<!-- alt+shift+f = identar-->
 <div>
    <!-- FORMULÁRIO para os campos que vamos alterar com css nosso-->
    <q-form ref="formPessoa" @submit="cadastrar" class="bg"><!--Cadastrar é o mét lá no script-->
        <!--Para usar CSS e config pág vá à pasta css em app.scss temos o arqv geral do sistema para usarmos-->


        <div class="bg"></div>
            <div class="main-container">
                    <div class="q-mb-md">
                        <h4 class="title">Cadastrar Pessoa</h4>

                        <div class="divisor-inline"> </div>
                    </div>

                <!-- ------------------------------------------------------------------------------------------- -->
                <div class="q-pa-md" style="margin-top: -30px;">                    
                    <h4 class="subTitle">Dados Básicos</h4>
                    <div class="row q-col-gutter-lg q-mb-sm">
                        <div class="col-7">
                            <!-- aqui serão os campos -->
                            <!-- PARA MONTAR CAMPOS COM QUASAR= google → quasar.dev → procura no site ex: input acha o modelo
                            clica em view source <> e cópia o código -->
                            <q-input :rules="[ val => !(val == null || val =='') || 'Campo obrigatório']" 
                                        v-model="pessoa.nome" label="Nome" dense/> 
                                        <!-- v-model= var q passa o valor -->
                                         <!-- rules são as regras, olha na documentação para aprender a gerar mais
                                          existe outra forma melhor de fazer em vez de repetir em todos os campos
                                          . será feito mais à frente -->
                        </div>

                        <div class="col-2"><q-input :rules="[ val => !(val == null || val =='') || 'Campo obrigatório']"
                                                    v-model="pessoa.documento" label="Documento" dense/></div>

                        <div class="col-3"><q-input :rules="[ val => !(val == null || val =='') || 'Campo obrigatório']"
                                                    v-model="pessoa.profissao" label="Profissão" dense/></div>                       
                    </div>    


                    <div class="row q-col-gutter-lg q-mt-sm">    
                        <div class="col-md-7">
                            <q-field :rules="[ val => !(val == null || val =='') || 'Campo obrigatório']" dense label="Tipo Pessoa" 
                                        lazy-rules borderless stack-label>
                                <q-option-group v-model="pessoa.tipo" :options="optionsTipoPessoa" color="primary" inline/>
                                <!-- :options é um array, pq aqui pode várias opções  -->
                            </q-field>
                        </div>

                        <div class="col-md-5">
                            <q-field :rules="[ val => !(val == null || val =='') || 'Campo obrigatório']" dense label="Estado Civil" 
                                    lazy-rules borderless stack-label>
                                <q-option-group v-model="pessoa.tipo" :options="optionsEstadoCivil" color="primary" inline/>                                
                            </q-field>
                        </div>
                    </div>
                </div>
                <!-- ------------------------------------------------------------------------------------------- -->




                <div class="q-pa-md" style="margin-top: -30px;">                    
                    <h4 class="subTitle">Endereço</h4>
                    <div class="row q-col-gutter-lg q-mb-sm">
                        <div class="col-7">
                            <!-- aqui serão os campos -->
                            <!-- PARA MONTAR CAMPOS COM QUASAR= google → quasar.dev → procura no site ex: input acha o modelo
                            clica em view source <> e cópia o código -->
                            <q-input :rules="[ val => !(val == null || val =='') || 'Campo obrigatório']" 
                                        v-model="pessoa.nome" label="Nome" dense/> 
                                        <!-- v-model= var q passa o valor -->
                                         <!-- rules são as regras, olha na documentação para aprender a gerar mais
                                          existe outra forma melhor de fazer em vez de repetir em todos os campos
                                          . será feito mais à frente -->
                        </div>

                        <div class="col-2"><q-input :rules="[ val => !(val == null || val =='') || 'Campo obrigatório']"
                                                    v-model="pessoa.documento" label="Documento" dense/></div>

                        <div class="col-3"><q-input :rules="[ val => !(val == null || val =='') || 'Campo obrigatório']"
                                                    v-model="pessoa.profissao" label="Profissão" dense/></div>                       
                    </div>    


                    <div class="row q-col-gutter-lg q-mt-sm">    
                        <div class="col-md-7">
                            <q-field :rules="[ val => !(val == null || val =='') || 'Campo obrigatório']" dense label="Tipo Pessoa" 
                                        lazy-rules borderless stack-label>
                                <q-option-group v-model="pessoa.tipo" :options="optionsTipoPessoa" color="primary" inline/>
                                <!-- :options é um array, pq aqui pode várias opções  -->
                            </q-field>
                        </div>

                        <div class="col-md-5">
                            <q-field :rules="[ val => !(val == null || val =='') || 'Campo obrigatório']" dense label="Estado Civil" 
                                    lazy-rules borderless stack-label>
                                <q-option-group v-model="pessoa.tipo" :options="optionsEstadoCivil" color="primary" inline/>                                
                            </q-field>
                        </div>
                    </div>
                </div>



                <!-- ------------------------------------------------------------------------------------------- -->
                <div class="row">
                    <div class="col-12">
                        <div  style="float:right">
                            <!-- Botões -->
                            <q-btn label="voltar" style="margin-right: 10px" no-caps class="btn-voltar"/>
                            <q-btn type="submit"  label="Cadastrar" no-caps class="btn-cadastrar"/>
                            <!-- a partir do momento q tem o btn com submit ele vai chamar @submit="cadastrar"
                             q é o mét feito abaixo-->
                        </div>
                    </div>
                </div>
            </div>

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
        // declaro uma constante pessoa, o objeto q será usado 
        // ref = à medida q usu digita na tela ela muda seu valor. uma var reativa
        const pessoa = ref({
            nome : null,
            // endereco
            tipo : null,
            documento : null,
            profissao : null,
            estadoCivil : null,
        })
        return {// todo setup precisa de return
            pessoa,

            optionsTipoPessoa: [
                {
                    label: 'Pessoa Física',
                    value: 'PESSOA_FISICA'
                },
                {
                    label: 'Pessoa Jurídica',
                    value: 'PESSOA_JURIDICA'// IGUAL enum do back
                },                
            ],


            optionsEstadoCivil: [
                {
                    label: 'Casado',
                    value: 'CASADO'
                },
                {
                    label: 'Solteiro',
                    value: 'SOLTEIRO'
                },
                {
                    label: 'Divorciado',
                    value: 'DIVORCIADO'
                },                
            ],
        }
    },
    // agora os méts q queremos na tela
    methods : {
        cadastrar (){
            console.log('invocou o mét cadastrar')
        }
    }  
}
</script>