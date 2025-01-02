SQL = "Insert Into tb_vendas_pre (Codigo, Data_Movimento, Hora_Inicio, Hora_Finalizacao, Id_Cliente, Id_Operacao, Desconto_Venda, Total_Produtos, Total_Desconto, Total_Acrescimo, Total_Frete, Total_A_Receber, Total_Itens, Total_Peso, Troco, RegExcluido, DHU, Modo, Tempo, Observacao, IDUser, IDEmpresa) Values (" & _
                    "" & Seq & "," & _
                    "'" & Format(Date, "yyyy-mm-dd") & "'," & _
                    "'" & Format(Time, "hh:mm:ss") & "'," & _
                    "'" & Format(Time, "hh:mm:ss") & "'," & _
                    "" & rsmysql!Id_Cliente & "," & _
                    "" & IDOpPDV & ", " & _
                    "0,0,0,0,0,0,0,0,0," & _
                    "'0'," & _
                    "'" & Format(Time, "ddmmyy") & "_" & Format(Time, "hhmmss") & "'," & _
                    "'MODO PDV'," & _
                    "" & sTempo & "," & _
                    "'" & rsmysql!Observacao & "'," & _
                    "" & Fnc_ID_User_Logado & "," & _
                    "" & Fnc_ID_Empresa_Logado & "" & _
                    ")"





SQL = "Insert Into tb_vendas_produtos_pre (Codigo, Item, Id_venda, Id_Produto, Codigo_Barras, Quantidade, Unitario, Total, Acrescimo, Desconto, Frete, Total_A_Receber, Peso, Unitario_Referencia, Id_Vendedor, Comissao, Comissao_Referencia, Reservado, RegExcluido, Via_Oferta, DHU, Desconto_Venda, Custo, Proc_Estoque, IDUser, Preco_Digitado, Valor_FPag_Desconto, Valor_Fpag_Acrescimo) Values (" & _
                        "" & Seq2 & "," & _
                        "" & sItem & "," & _
                        "" & Seq & "," & _
                        "" & rsmysqlItem!Id_Produto & "," & _
                        "'" & rsmysqlItem!Codigo_Barras & "'," & _
                        "" & Fnc_Virgula_Ponto(Nz(rsmysqlItem!Quantidade, 0)) & "," & _
                        "" & Fnc_Virgula_Ponto(Nz(rsmysqlItem!Unitario, 0)) & "," & _
                        "" & Fnc_Virgula_Ponto(Nz(rsmysqlItem!Total, 0)) & "," & _
                        "0," & _
                        "" & Fnc_Virgula_Ponto(Nz(rsmysqlItem!Total_Desconto, 0)) & "," & _
                        "0," & _
                        "" & Fnc_Virgula_Ponto(Nz(sTotal_A_Receber, 0)) & "," & _
                        "" & Fnc_Virgula_Ponto(Nz(rsmysqlItem!Peso, 0)) & "," & _
                        "" & Fnc_Virgula_Ponto(Nz(rsmysqlItem!Unitario, 0)) & "," & _
                        "" & ID_Vendedor & " ," & Fnc_Virgula_Ponto(Nz(rsmysqlItem!vlrcomissao, 0)) & "," & Fnc_Virgula_Ponto(Nz(rsmysqlItem!vlrcomissao, 0)) & "," & _
                        "'0', " & _
                        "'0', " & _
                        "'0', " & _
                        "'" & Format(Time, "ddmmyy") & "_" & Format(Time, "hhmmss") & "'," & _
                        "0," & _
                        "" & Fnc_Virgula_Ponto(Nz(rsmysqlItem!Preco_Compra, 0)) & "," & _
                        "'0', " & Fnc_ID_User_Logado & ", " & _
                        "" & Fnc_Virgula_Ponto(Nz(rsmysqlItem!Unitario, 0)) & ", 0, 0 " & _
                        ")"
50440             Call Conexao_Open_Execute(SQL, 199)