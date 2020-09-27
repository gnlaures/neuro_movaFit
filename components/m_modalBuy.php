<div class="m-modalBuyMask"></div>
<div class="m-modalBuyClose">
	<img src="media/img/icons/icon_x.svg" alt="Fechar">
</div>

<section class="m-modalBuy" id="comprar">
	<header class="m-modalBuy__head">
		<h1>
			<i><?php include('media/img/icons/icon_basket.svg'); ?></i>
			<span>Comprar</span>
		</h1>
	</header>
	<article class="m-modalBuy__content">
		<form action="envia-compra" class="c-cardSale__form c-simpleForm" id="formComprar" method="post" novalidate="novalidate">
			<ul>
				<li class="u-fw100">
					<label for="formSale_nome">Nome completo</label>
					<input id="formSale_nome" type="text" name="nome" class="field placeholder" placeholder="Digite seu nome" required="" aria-required="true">
				</li>
				<li class="u-fw35">
					<label for="formSale_cpf">CPF</label>
					<input id="formSale_cpf" type="text" name="cpf" class="field cpfMask placeholder" placeholder="Digite seu cpf" required="" aria-required="true">
				</li>
				<li class="u-fw65">
					<label for="formSale_email">E-mail</label>
					<input id="formSale_email" type="email" name="email" class="field placeholder" placeholder="example@site.com" required="" aria-required="true">
				</li>
				<li class="u-fw35">
					<label for="formSale_cep">CEP</label>
					<input id="formSale_cep" type="text" name="cep" class="field cepMask placeholder" placeholder="00000-000" required="" aria-required="true">
				</li>
				<li class="u-fw65">
					<label for="formSale_rua">Rua</label>
					<input id="formSale_rua" type="text" name="rua" class="field placeholder" placeholder="" required="" aria-required="true">
				</li>
				<li class="u-fw35">
					<label for="formSale_numero">Numero</label>
					<input id="formSale_numero" type="text" name="numero" class="field placeholder" placeholder="" required="" aria-required="true">
				</li>
				<li class="u-fw65">
					<label for="formSale_bairro">Bairro</label>
					<input id="formSale_bairro" type="text" name="bairro" class="field placeholder" placeholder="" required="" aria-required="true">
				</li>
				<li class="u-fw50">
					<label for="formSale_complemento">Complemento</label>
					<input id="formSale_complemento" type="text" name="complemento" maxlength="40" class="field placeholder" placeholder="">
				</li>
				<li class="u-fw50">
					<label for="formSale_telefone">Telefone</label>
					<input id="formSale_telefone" type="text" name="telefone" maxlength="15" size="15" class="field foneMask placeholder" placeholder="">
				</li>
				<li class="u-fw50 liSelect">
					<label for="estadoFrete">Estado</label>
					<select name="estado" id="estadoFrete" class="field" required="" aria-required="true">
						<option value="">Selecione</option>
						<option value="AC">Acre</option>
						<option value="AL">Alagoas</option>
						<option value="AP">Amapá</option>
						<option value="AM">Amazonas</option>
						<option value="BA">Bahia</option>
						<option value="CE">Ceará</option>
						<option value="DF">Distrito Federal</option>
						<option value="ES">Espirito Santo</option>
						<option value="GO">Goiás</option>
						<option value="MA">Maranhão</option>
						<option value="MS">Mato Grosso do Sul</option>
						<option value="MT">Mato Grosso</option>
						<option value="MG">Minas Gerais</option>
						<option value="PA">Pará</option>
						<option value="PB">Paraíba</option>
						<option value="PR">Paraná</option>
						<option value="PE">Pernambuco</option>
						<option value="PI">Piauí</option>
						<option value="RJ">Rio de Janeiro</option>
						<option value="RN">Rio Grande do Norte</option>
						<option value="RS">Rio Grande do Sul</option>
						<option value="RO">Rondônia</option>
						<option value="RR">Roraima</option>
						<option value="SC">Santa Catarina</option>
						<option value="SP">São Paulo</option>
						<option value="SE">Sergipe</option>
						<option value="TO">Tocantins</option>
					</select>
				</li>
				<li class="u-fw50 liSelect">
					<label for="cidadeFrete">Cidade</label>
					<select name="cidade" id="cidadeFrete" class="field" required="" aria-required="true">
						<option value="">Aguardando</option>
					</select>
				</li>
				<li class="u-fw50">
					<label for="formSale_qtd">Quantidade</label>
					<div class="formSale_qtd">
						<?php include('components/c_addRemoveQTD.php'); ?>
					</div>
				</li>
				<li class="u-fw50 liFinalPrices">
					<div class="liPrice">
						<span class="coin">Produtos: R$</span>
						<span class="smallValue js-finalValue">150,00</span>
					</div>
					<div class="liPrice">
						<span class="coin">Frete: R$</span>
						<span class="smallValue js-finalFrete">R$ 00,00 // api</span>
					</div>
					<div class="liPrice">
						<span class="coin">Total: R$</span>
						<span class="value js-finalTotal">R$ 00,00 //api</span>
					</div>
				</li>
				<li class="u-fw100 liBtn">
					<input type="text" name="mail" id="mail" class="fieldQtd" style="display: block;border: 0;height: 0;opacity: 0">
					<button href="#" class="c-btnWithIcon --primary">
						<i><?php include('media/img/icons/icon_basket.svg'); ?></i>
						<span>Comprar</span>
					</button>
				</li>
			</ul>
		</form>
	</article>
</section>