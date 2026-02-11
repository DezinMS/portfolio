print("Bem-vindo ao contador de palavras!\n")
texto = input("Digite uma frase ou parágrafo: ")

palavras = texto.split()
num_palavras = len(palavras)
num_caracteres = len(texto)

print(f"\nSua frase tem {num_palavras} palavras e {num_caracteres} caracteres.")
