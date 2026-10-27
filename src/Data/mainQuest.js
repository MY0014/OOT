export const MAIN_QUEST = [
  {
    id: 'quest_1',
    title: 'Expandir Bolsa de Semillas Deku',
    location: 'Bosque Kokiri',
    era: 'Niño',
    requirements: 'Ninguno',
    keyItems: ['Ocarina', 'Resortera'],
    steps:[
      {
        id: 'tip1',
        text: ' Para expandir el inventario de semillas Deku que usas con la resortera, ve al bosque perdido. Sigue el patron, DERECHO, DERECHA, DERECHA. Veras una rueda colgando de un arbol la cual deberes de golpear en el centro con la resortera, deberan de ser 3 tiros de 100 puntos.',
        image: require('../../assets/images/43.png')
      },
      {
        id: 'tip2',
        text: ' Cuando lo consigas, aparecera una criatura del bosque y te entregara un costal en el cual podras llevar 50 semillas Deku.',
        image: require('../../assets/images/44.png')
      },

    ]
  },
  {
    id: 'quest_4',
    title: 'Mascaras',
    location: 'Plaza del mercado',
    era: 'Niño',
    requirements: 'Ninguno',
    keyItems: ['Ninguno'],
    steps:[
      {
        id: 'tip',
        text: 'Las máscaras se obtienen dentro de una tienda llamada La Máscara Feliz situada en la plaza del mercado del castillo de Hyrule (cuando Link sea niño y solo durante el día). Dirígete a dicha tienda una vez hayas abierto el camino a la Montaña de la Muerte gracias a la Carta de Zelda, y habla con el vendedor para que te venda la primera máscara por 10 rupias: la careta de Keaton.',
        image: require('../../assets/mascaras/m1.png')
      },
      {
        id: 'tip',
        text: 'Máscara con aspecto de monstruo. Te hace parecer un tipo temible y duro (20 rupias). Cuando la tengas, dirígete al Bosque Perdido y toma el primer camino que sale a mano izquierda. Así llegarás a un lugar en el que hay extraño personaje subido en lo alto de un tronco. Súbete en un tocón que hay frente al tronco y habla con dicho personaje llevando la máscara puesta. * Nota: para poder hablar con este personaje primero tendrás que tocar desde lo alto del tronco la Canción de Saria. Al hacerlo, te dará la 6.ª pieza de corazón y después podrás hablar con él para darle la máscara.',
        image: require('../../assets/mascaras/m2.png')
      },
      {
        id: 'tip',
        text: 'Espeluznante máscara de madera. Una máscara así asusta a cualquiera (30 rupias). Cuando la tengas, dirígete al cementerio de Kakariko cuando sea de día y dásela a un niño que encontrarás por allí, jugando entre las lápidas.',
        image: require('../../assets/mascaras/m3.png')
      },
      {
        id: 'tip',
        text: 'Máscara con forma de conejo. ¡Sus largas orejas son adorables! (50 rupias). Cuando la tengas, dirígete a la llanura de Hyrule y dásela a un hombre que encontrarás corriendo por alguna parte después de completar el Interior de la tripa de Jabu-Jabu (suele seguir los caminos y cuando lo encuentres, tendrás que esperar que se pare a descansar por la noche para hablar con él y darle la máscara). Puesto que la llanura es bastante grande y puede estar por cualquier lado, no es nada fácil dar con él.',
        image: require('../../assets/mascaras/m4.png')
      },
      {
        id: 'tip',
        text: 'Esta máscara te la darán como recompensa por haber vendido todas las mascaras anteriores. Cuando la usas podrás leer las Piedras Chismosas. ',
        image: require('../../assets/mascaras/m5.png')
      },
      {
        id: 'tip',
        text: 'Aunque la máscara que verdaderamente es útil es la Máscara de la Verdad, podrás conseguir otras tres máscaras después de vender las anteriores. Estas tres máscaras no se las puedes vender a nadie, aunque servirán para hacer aún más divertido el juego. Esas máscaras son: la máscara goron, la máscara zora y la máscara gerudo. Cuando las lleves puestas y hables con los Goron, los Zora o las Gerudo, te dirán cosas divertidas.',
        image: require('../../assets/mascaras/m6.png')
      },

    ]
  },
  {
    id: 'quest_5',
    title: 'Judias Magicas',
    location: 'Mapa de Hyrule',
    era: 'Niño',
    requirements: 'Ninguno',
    keyItems: ['Ocarina', 'Resortera'],
    steps:[
            {
                id: 'hr',
                text: 'Si vas al río Zora siendo Link niño verás que junto a una reja que está cerca de la entrada hay un hombre que vende judías mágicas. Esa reja está detrás de unas rocas que tienes que romper con bombas. Este hombre podrá venderte hasta 10 judías, aunque a diferentes precios. La primera te la venderá por 10 rupias y las siguientes valdrán 10 rupias más que la anterior hasta llegar a la décima, la cual costará 100 rupias.',
                image: require('../../assets/judias/1.png')
            },
            {
                id: 'hr',
                text: 'Las judías mágicas las tienes que plantar en unos agujeros que hay en el suelo siendo Link Niño',
                image: require('../../assets/judias/2.png')
            },
            {
                id: 'hr',
                text: 'De esa forma, si vuelves a donde las has plantado siendo Link adulto verás que las judías se han convertido en unas plantas que te elevarán al pisarlas, haciendo que puedas llegar a zonas elevadas.',
                image: require('../../assets/judias/3.png')
            },
            {
                id: 'hr',
                text: 'Los lugares donde puedes plantar las Judías Mágicas son los siguientes.',
                image: require('../../assets/judias/mapa_judia.png')
            },
            {
                id: 'hr',
                text: 'Al lado del Laboratorio del lago de Hylia.',
                image: require('../../assets/judias/4.png')
            },
            {
                id: 'hr',
                text: 'Lo encuentras en el abismo que hay al entrar en el valle Gerudo, donde está el puente de madera roto. Tienes que saltar a la parte inferior por el lado derecho del puente con una gallina cogida para poder planear (la gallina la encuentras junto al puente).',
                image: require('../../assets/judias/5.png')
            },
            {
                id: 'hr',
                text: 'En la entrada de la cueva de los dodongos.',
                image: require('../../assets/judias/6.png')
            },
            {
                id: 'hr',
                text: 'En el Cementerio, junto a las tumbas del lado izquierdo.',
                image: require('../../assets/judias/7.png')
            },
            {
                id: 'hr',
                text: 'En el cráter de la Montaña de la Muerte (está donde apareces al tocar el Bolero del fuego).',
                image: require('../../assets/judias/8.png')
            },
            {
                id: 'hr',
                text: 'En el río Zora, junto al personaje que te vende las judías mágicas.',
                image: require('../../assets/judias/9.png')
            },
            {
                id: 'hr',
                text: 'Detrás de la Tienda del Bosque Kokiri.',
                image: require('../../assets/judias/10.png')
            },
            {
                id: 'hr',
                text: 'En el Bosque Perdido. Al entrar en el Bosque Perdido, métete por la cueva de la izquierda y después otra vez por la cueva de la izquierda.',
                image: require('../../assets/judias/11.png')
            },
            {
                id: 'hr',
                text: 'En el Bosque Perdido. Al entrar en el Bosque Perdido, métete por la cueva de la derecha, después por la de la izquierda, después por la de la derecha, después por la de la izquierda y por último por la de la izquierda.',
                image: require('../../assets/judias/12.png')
            },
            {
                id: 'hr',
                text: 'Tras cruzar el desierto encantado, al lado de la entrada al Templo del Espíritu.',
                image: require('../../assets/judias/13.png')
            },
            


    ]
  },
  {
    id: 'quest_6',
    title: 'Canciones del Ocarina',
    location: 'Hyrule.',
    era: 'Niño',
    requirements: 'Ninguno',
    keyItems: ['Ocarina', 'Ocarina del tiempo'],
    steps:[
      {
        id: 'tip',
        text: 'Te la enseñará Impa, la protectora de Zelda, después de que hables con la princesa en el interior del castillo de Hyrule. Tócala en lugares donde veas el símbolo de la Trifuerza. Dependiendo de donde sea ocurrirán cosas diferentes: subirá el nivel del agua, aparecerán Grandes Hadas, cofres, etc.',
        image: require('../../assets/songs/c1.png')
      },
      {
        id: 'tip',
        text: 'Te la enseña Malón, la niña del rancho Lon Lon, hablando con ella cuando está en el centro del rancho durante el día. Para que te la enseñe deberás sacar la Ocarina cuando estés a su lado.Sirve para llamar a Epona cuando seas Link Adulto (antes tendrás que haberla conseguido, claro). Si la tocas al lado de alguna vaca, te llenará de leche una botella vacía que lleves. ',
        image: require('../../assets/songs/c2.png')
      },
      {
        id: 'tip',
        text: 'Ve al cementerio de Kakariko y en la tumba que hay más al fondo verás una gran lápida que tiene delante el símbolo de la Trifuerza. Colócate sobre ella, toca la Nana de Zelda para desaparezca, y así podrás entrar al Panteón real.Una vez dentro encontrarás una sala en la que deberás acabar con todos los murciélagos existentes para poder seguir avanzando (se recomienda el tirachinas). Luego atraviesa la siguiente habitación evitando a los muertos vivientes que hay en ella (gibdos), y al final encontrarás una piedra con una inscripción que debes leer. Así te enseñarán esta melodía. Al tocar esta canción cambiará el estado del día, es decir, que si la tocas de día se hará de noche y si la tocas de noche se hará de día.',
        image: require('../../assets/songs/c3.png')
      },
      {
        id: 'tip',
        text: 'Te la enseña Saria cuando hables con ella en la pradera sagrada del bosque.Función 	Sirve para hablar telepáticamente con Saria, y también para que el Rey Darunia te de el Brazalete Goron.',
        image: require('../../assets/songs/c4.png')
      },
      {
        id: 'tip',
        text: 'Se consigue automáticamente al encontrar la Ocarina del Tiempo (cuando Zelda escape a caballo del castillo).Función 	Sirve para hacer desaparecer bloques cuadrados que tengan el símbolo del Templo del Tiempo.',
        image: require('../../assets/songs/c5.png')
      },
      {
        id: 'tip',
        text: 'Entra en el molino de viento que hay en Kakariko y dentro verás a un hombre tocando un instrumento musical. Si te pones a su lado y sacas la Ocarina, te enseñará la canción. Al tocar esta canción se pondrá a llover.',
        image: require('../../assets/songs/c6.png')
      },
      {
        id: 'tip',
        text: 'Cuando llegues a la entrada del Templo del Bosque en el pradera sagrada del bosque, te encontrarás a Sheik. Al hablar con él te enseñará la canción. Con esta canción te teletransportarás al final de la pradera sagrada del bosque y aparecerás directamente en la entrada del Templo del Bosque.',
        image: require('../../assets/songs/c7.png')
      },
      {
        id: 'tip',
        text: 'Si después de terminar el Templo del Bosque regresas al Templo del Tiempo, en su interior te encontrarás con Skeik. Al hablar con él te enseñará la canción. Al tocar esta canción aparecerás directamente dentro del Templo del Tiempo.',
        image: require('../../assets/songs/c8.png')
      },
      {
        id: 'tip',
        text: 'Cuando llegues frente a la entrada del Templo del Fuego (dentro del cráter de la Montaña de la Muerte), te encontrarás con Sheik. Al hablar con él te enseñará la canción. Con esta canción te teletransportarás al centro del cráter de la Montaña de la Muerte, y aparecerás directamente en la entrada del Templo del Fuego.',
        image: require('../../assets/songs/c9.png')
      },
      {
        id: 'tip',
        text: 'Cuando abras el cofre que contiene las botas de hierro dentro de la Caverna de hielo aparecerá Sheik. Habla con él y te enseñará la canción. Al tocar esta canción te teletransportarás a la plataforma que hay en el centro del lago de Hylia.',
        image: require('../../assets/songs/c10.png')
      },
      {
        id: 'tip',
        text: 'Después de completar el Templo del Agua, dirígete a Kakariko y tendrás una visión en la que el pueblo aparecerá ardiendo. Luego ve hacia el pozo del pueblo y entonces aparecerá Sheik te enseñará la canción. Con esta canción te teletransportarás a la entrada del Templo de las Sombras (aparecerás en una plataforma elevada que hay en el cementerio).',
        image: require('../../assets/songs/c11.png')
      },
      {
        id: 'tip',
        text: 'Cuando salgas por primera vez del Templo del Espíritu te encontrarás con Sheik, y al hablar con él te enseñará la canción. Con esta canción te teletransportarás a la entrada del Templo del Espíritu.',
        image: require('../../assets/songs/c12.png')
      },
      {
        id: 'tip',
        text: 'Dirígete al lago de Hylia cuando seas Link niño, y cerca de la orilla verás a dos espantapájaros. Acércate primero al de abajo (Bonooru) y tócale una canción cualquiera que tenga ocho notas musicales (te la tendrás que inventar). Después regresa a este mismo lugar cuando seas Link Adulto y verás que sólo hay un espantapájaros. Tócale a él la misma canción que tocaste cuando eras niño, y entonces te dirá que al tocar esta canción su amigo Pierre aparecerá para ayudarte. Se usa para hacer aparecer un espantapájaros en ciertos lugares al que te podrás enganchar con el gancho. Así podrás alcanzar sitios inaccesibles de otra forma.',
        image: require('../../assets/songs/c13.png')
      },



    ]
  },
  {
    id: 'quest_8',
    title: 'Comercio',
    location: 'Bosque Kokiri',
    era: 'Niño',
    requirements: 'Ninguno',
    keyItems: ['Ocarina', 'Resortera'],
    steps:[
            {
                id: 'hr',
                text: ' Huevo de bolsillo: Este objeto te lo da la chica de las gallinas de Kakariko cuando hablas con ella.',
                image: require('../../assets/comercio/1.png')
            },
            {
                id: 'hr',
                text: 'Cuando pase un día, del huevo aparecerá un gallo blanco llamado cuco de bolsillo con el que tienes que despertar a Talon',
                image: require('../../assets/comercio/2.png')
            },
            {
                id: 'hr',
                text: 'al cual encontrarás durmiendo en la casa que hay nada más entrar en el pueblo a mano izquierda.',
                image: require('../../assets/comercio/3.png')
            },
            {
                id: 'hr',
                text: ' Cuco de bolsillo: Después de despertar a Talon en la casa de Kakariko, habla de nuevo con la chica de las gallinas y al darle el gallo blanco te dará a Cojiro, el gallo azul.',
                image: require('../../assets/comercio/4.png')
            },
            {
                id: 'hr',
                text: ' Cojiro: Cojiro se lo tienes que dar a un hombre que está en el Bosque Perdido. Al bosque se llega por la cueva a la que se llega trepando por la pared que está detrás de la casa de Mido en el Bosque Kokiri.',
                image: require('../../assets/comercio/5.png')
            },
            {
                id: 'hr',
                text: 'Para llegar a la zona donde está el hombre, tienes que entrar en el bosque y en la primera sala métete por la cueva de la izquierda. Allí encontrarás a una niña al lado de un tronco de árbol. Dale a Cojiro y dé a cambio te dará una seta rara.',
                image: require('../../assets/comercio/6.png')
            },
            {
                id: 'hr',
                text: ' Seta rara: Cuando el hombre del Bosque Perdido te dé la seta, tendrás 3 minutos para llevársela a la anciana que hace pociones en Kakariko. Para llegar a la casa de la anciana, entra en Kakariko y subiendo la escalera de la izquierda verás dos casas. Si te metes en la de la derecha, verás una puerta al fondo a la izquierda que te lleva a un patio trasero donde hay una escalera.',
                image: require('../../assets/comercio/7.png')
            },
            {
                id: 'hr',
                text: 'Baja por ella y al lado encontrarás otra escalera de piedra que te lleva a otra tienda de pociones donde está la anciana a la que le tienes que dar la seta rara (la primera casa en la que entras es una tienda de pociones, y sólo podrás entrar cuando es de día). Cuando le des la Seta a la anciana, ella te dará una medicina rara.',
                image: require('../../assets/comercio/8.png')
            },
            {
                id: 'hr',
                text: ' Medicina rara: La Poción se la tienes que dar a una chica Kokiri que está en el Bosque Perdido. Tras entrar en el Bosque Perdido, métete en la cueva de la izquierda y encontrarás a una niña al lado de un tronco de árbol (sólo la verás si te acercas al tronco de árbol. Está en el mismo lugar donde estaba el niño al que le diste el gallo Cojiro). Cuando le des la medicina rara, ella te dará una sierra del furtivo.',
                image: require('../../assets/comercio/9.png')
            },
            {
                id: 'hr',
                text: ' Sierra del furtivo: La Sierra se la tienes que dar al carpintero que está en valle Gerudo, el cual está delante de una tienda de campaña tras el puente que lleva a la fortaleza gerudo. Si el puente sigue roto, lo puedes cruzar con el supergancho o saltando con Epona. Tras darle la sierra del furtivo te dará la espada goron rota.',
                image: require('../../assets/comercio/10.png')
            },
            {
                id: 'hr',
                text: ' Espada goron rota: La espada goron rota se la tienes que dar a Biggoron, que es un goron gigante que está en la cima de la montaña. Para llegar allí, sube por el sendero de la Montaña de la Muerte y, cuando llegues a un lugar donde hay un poste de madera con un trapo rojo, continúa por las plataformas que están en el lado izquierdo y al final trepa por la pared para llegar arriba del todo.',
                image: require('../../assets/comercio/11.png')
            },
            {
                id: 'hr',
                text: 'Para poder subir por las plataformas que están a la izquierda del poste tienes que destruir las rocas con el Martillo o con Bombas (si aún no las habías destruido).Una vez arriba, acércate a la pared de la derecha para que aparezca Biggoron y dale la espada rota para que te la cambie por una receta. ',
                image: require('../../assets/comercio/12.png')
            },
            {
                id: 'hr',
                text: ' Receta: La receta se la tienes que dar al Rey Zora en la Región de los zora. Él a cambio te dará una rana de ojos saltones.Antes de darle la receta al Rey Zora tienes que haberle descongelado con el fuego azul que hay en la Caverna de hielo.',
                image: require('../../assets/comercio/13.png')
            },
            {
                id: 'hr',
                text: ' Rana de ojos saltones: Cuando tengas la rana de ojos saltones se la tienes que llevar al científico que está en la casa que encuentras nada más entrar en el lago de Hylia en menos de 3 minutos. Cuando le des la Rana, él te dará las supergotas oculares.',
                image: require('../../assets/comercio/14.png')
            },
            {
                id: 'hr',
                text: ' Supergotas oculares: Las supergotas oculares se las tienes que llevar a Biggoron (el goron gigante de la cima de la Montaña de la Muerte) en menos de 4 minutos. Al darle las gotas, Biggoron te dará un albarán y te dirá que vuelvas cuando pasen algunos días.',
                image: require('../../assets/comercio/15.png')
            },
            {
                id: 'hr',
                text: ' Albarán: Cuando tengas el albarán tienes que esperar tres días, y cuando pasen, vuelve a hablar con Biggoron en la cima de la Montaña de la Muerte. Si han pasado los tres días te dará la espada de Biggoron a cambio del albarán y si no han pasado te dirá que tengas paciencia y que esperes.',
                image: require('../../assets/comercio/16.png')
            },
            {
                id: 'hr',
                text: 'Para que pasen los días rápidamente puedes tocar la Canción del Sol varias veces (tienen que pasar varios días y varias noches). Cuando te den la espada seguirás con el albarán en tu inventario.',
                image: require('../../assets/comercio/17.png')
            },

    ]
  },
];