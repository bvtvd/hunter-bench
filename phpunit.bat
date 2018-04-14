@ECHO OFF
setlocal DISABLEDELAYEDEXPANSION
SET BIN_TARGET=%~dp0vendor/phpunit/phpunit/phpunit
php "%BIN_TARGET%" %*
