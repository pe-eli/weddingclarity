# Wedding Clarity Kit — versão de trabalho

Página estática em inglês americano, sem dependências, formulários, rastreadores, pop-ups ou etapas adicionais. O conteúdo vem exclusivamente do briefing: nenhum arquivo real do produto foi fornecido.

## Visualização e edição

Abra `dist/index.html` no navegador, ou execute `python -m http.server 4173 --bind 127.0.0.1 --directory dist` nesta pasta e acesse http://127.0.0.1:4173.

- `dist/index.html`: conteúdo das seções, FAQs nativas e metadados.
- `dist/styles.css`: paleta, tipografia, estilos responsivos e foco acessível.
- `dist/config.js`: única variável CHECKOUT_URL e estados de revisão editorial.
- `dist/app.js`: CTAs e repasse de UTMs.

## Conferência das afirmações

| Item | Evidência disponível | Estado |
| --- | --- | --- |
| US$ 29, pagamento único, produto digital | Briefing | Reproduzido; conferir também no checkout |
| PDF de aproximadamente 30–40 páginas, temas e checklists | Apenas briefing; PDF ausente | Conteúdo proposto, não verificado |
| Workbook e oito abas | Apenas briefing; planilha ausente | Conteúdo proposto, não verificado |
| Exemplo fictício, guia e demonstração | Apenas briefing; arquivos ausentes | Conteúdo proposto, não verificado |
| Capturas reais e vídeo | Não fornecidos | Espaços explícitos; nenhuma tela fictícia |
| Acesso instantâneo | Não confirmado | Não prometido |
| Entrega, suporte, reembolso e identidade do vendedor | Não fornecidos | Pendências visíveis; nenhuma política inventada |
| Compra e conversão | Nenhuma integração ou dado | Nenhuma alegação ou evento de compra |

Não foi possível comparar o conteúdo com arquivos finais inexistentes nesta pasta. Os avisos de versão de trabalho fazem parte desta entrega; esta versão não deve ser usada para receber tráfego comercial.

## Antes de lançar

1. Fornecer e conferir PDF, workbook, exemplo preenchido, guia e demonstração. Ajustar todas as descrições ao conteúdo efetivamente entregue, incluindo número real de páginas, abas, fórmulas e instruções de compartilhamento. Testar uma cópia com conta Google gratuita e colaboração com um parceiro.
2. Substituir os dois espaços restantes por imagens reais e legíveis. Usar WebP/AVIF com dimensões explícitas e texto alternativo descritivo; carregamento lazy nas imagens abaixo da primeira tela. Remover referências a recursos ausentes. Vídeo é opcional e só deve aparecer se fornecido.
3. Configurar CHECKOUT_URL em `dist/config.js` com a URL HTTPS real, preço US$ 29 e pagamento único. Confirmar como o provedor recebe os parâmetros UTM. O código repassa utm_source, utm_medium, utm_campaign, utm_content, utm_term e utm_id, preservando outros parâmetros existentes no checkout. Não armazena dados nem registra compras. Exemplo de entrada: `/?utm_source=instagram&utm_medium=organic_social&utm_campaign=wedding_kit&utm_content=bio` ou `utm_content=dm`.
4. Confirmar entrega e acesso e substituir as respostas provisórias nas FAQs. Só usar “Instant digital access” após testar a entrega real.
5. Inserir identificação do responsável, contato de suporte, termos, privacidade e política aplicável de reembolso. Não apenas mudar os estados: atualizar textos e criar links para os documentos reais.
6. Depois de verificar esses itens, mudar todos os estados de LAUNCH_CONFIG para true, remover avisos de trabalho, rótulos de pendência e meta robots noindex, e revisar a copy. O checkout fornecido pelo responsável já está ativo nos três CTAs, independentemente dos estados de revisão editorial. Apenas uma URL ausente ou inválida desativa os CTAs.
7. Conferir celular e desktop, zoom de texto, teclado, screenshots reais e todos os destinos. Testar a compra em ambiente de teste do provedor e a entrega; validar também no navegador interno do Instagram, cuja interface não foi emulada nesta entrega.

## Design e desempenho

Paleta fornecida preservada; Georgia + fontes do sistema evitam downloads de fontes. A página é HTML/CSS/JS pequeno, sem framework e sem chamadas externas. FAQs funcionam mesmo sem JavaScript. Sem JavaScript, os CTAs ficam indisponíveis por segurança. Versão de trabalho sem avatar; nenhum depoimento, desconto, contador ou número de compradores foi inventado.

## GitHub e Vercel

Repositório: https://github.com/pe-eli/weddingclarity. Vercel usa vercel.json e publica dist sem instalação ou build. O mockup fornecido está na primeira seção. Checkout configurado em config.js: Hotmart, produto O107942250T, com bid preservado e repasse de UTMs. Pendências editoriais não bloqueiam mais a navegação ao checkout, conforme autorização do responsável.
