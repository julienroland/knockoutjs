<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, Mandrill, and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => '',
        'secret' => '',
    ],
    'mandrill' => [
        'secret' => '',
    ],
    'stripe' => [
        'model' => 'User',
        'secret' => '',
    ],
    'dropbox' => [
        'driver' => 'dropbox',
        'token' => 'vdwYTaCwYmEAAAAAAAAC-ZAnCMIo1qzJoONd6OtxPlntBKvKuakpk2BB5C5MJOPq',
        'key' => 'sbjs6ax2h1dqg31',
        'app' => 'jagd@dogstudio'
    ],

];
