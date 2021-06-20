<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp-quiz' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '^G.feM@+jGlKOln;-(<p-mItm8Lz~vjOm !HI*4xsWnxyf?=8:RX_e5@vT_}[M07' );
define( 'SECURE_AUTH_KEY',  'hahT]`(M]i}t7=}TC;FjS9Qr*k=%5R0|SOXn,/NF`[W|oPP~LhF]7]fB,p=2^+vf' );
define( 'LOGGED_IN_KEY',    'FlRZ*vLKW@@r[;-V#5wrl*H z-Tn^4w-Q7b**|2[#pe5sxql!A5EC+}S#/gI:*16' );
define( 'NONCE_KEY',        '(md`<7hK}X]WCT<:gGjIDt(&k$X;7lzAW/#lgkk`hL_!M=MO!14/%!SF{<-G@H:#' );
define( 'AUTH_SALT',        'c{HEw%cltPb>depLhlz;@j|5Im5syaeQ `poF]}sFUt^a_nIw!E,|H/smGG0O18z' );
define( 'SECURE_AUTH_SALT', 'm<kNTfY2@COZq*>o]3%zQ;j_wB-0:ai^,3rjah6%3L%gto P6fb0BqZpy?}[pc>s' );
define( 'LOGGED_IN_SALT',   'OAjRwk&29ag-xr.zJ0V#KKIn&lM(?e%?b7f_Y|Gb-Pa>Kd>*f(sKm1([##sCh7LF' );
define( 'NONCE_SALT',       'pK)C:-{WNdnADUeR{1)!wLX{N1Lcmi~b1m0MS,zV@`Nr22`[f[An -|M^2IB-LMS' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
