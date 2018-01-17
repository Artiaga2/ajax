<?php

class musica
{

    public static function disco()
    {
        $discos = [
            [
                'id' => '1',
                'Nombre' => 'PROMETO',
                'Author' => ['Nombre' => 'PABLO ALBORAN', 'Estilo' => 'POP'],
                'Fecha' => '14/07/2016'

            ],
            [
                'id' => '2',
                'Nombre' => 'CAMINO, FUEGO Y LIBERTAD',
                'Author' => ['Nombre' => 'PABLO LOPEZ', 'Estilo' => 'ROCK'],
                'Fecha' => '17/07/2017'
            ],
            [
                'id' => '3',
                'Nombre' => '+ ES + EL CONCIERTO',
                'Author' => ['Nombre' => 'ALEJANDRO SANZ', 'Estilo' => 'POP'],
                'Fecha' => '14/09/1993'
            ],
            [
                'id' => '4',
                'Nombre' => 'LAS COSTURAS DEL ALMA',
                'Author' => ['Nombre' => ' EL BARRIO', 'Estilo' => 'FLAMENCO'],
                'Fecha' => '4/03/2017'
            ],
            [
                'id' => '5',
                'Nombre' => 'VIA DALMA III',
                'Author' => ['Nombre' => 'SERGIO DALMA', 'Estilo' => 'POP'],
                'Fecha' => '17/01/2018'
            ],
            [
                'id' => '6',
                'Nombre' => 'FITOGRAFIA',
                'Author' => ['Nombre' => 'FITO Y FITIPALDIS', 'Estilo' => 'POP'],
                'Fecha' => '12/07/2017'
            ]
        ];

        echo json_encode($discos);
    }


}

musica:disco();
