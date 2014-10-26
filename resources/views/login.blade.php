@extends('layout.layout')
@section('body')
login
<form method="post" data-bind="submit: authLogin">
<input type="text" data-bind="value: email" name="email" id="email" placeholder="email"/>
<input type="password" name="password" id="password" />
<input type="submit" value="Se connecter"/>
</form>
@stop

