import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">João Pedro Serra</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Computer Scientist & Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
         Sou um dev full-stack na procura de desenvolver meu mundo dentro do digital.
         Meus projetos procuram solucionar problemas reais de forma criativa usando a programação. 
         Todos os projetos são desenvolvidos da mesma maneira, com idealização, planejamento e por fim execução
         adicionando detalhes artísticos ao longo do caminho, pretendo deixar minha marca no mundo da computação com cada trabalho.
         </p>
      </div>
   )
}

export default Intro;