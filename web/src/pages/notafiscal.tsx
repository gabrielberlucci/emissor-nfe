import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const NotaFiscal = () => {
  return (
    //CABEÇÃRIO
    <div className="p-8 bg-[#0a0a0b] text-white min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Emitir Nova Nota Fiscal</h1>
          <p className="text-zinc-400">Preencha os dados abaixo para gerar o documento fiscal.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="border-zinc-800 text-white">Salvar Rascunho</Button>
          <Button className="bg-purple-600 hover:bg-purple-700">Emitir NFe</Button>
        </div>
      </div>

      <Tabs defaultValue="dados" className="w-full">
        <TabsList className="bg-transparent border-b border-zinc-800 w-full justify-start rounded-none h-auto p-0 pb-2 mb-8">
          <TabsTrigger value="dados" className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 rounded-none bg-transparent px-6 text-zinc-400 data-[state=active]:text-white">
            Dados Gerais e Itens
          </TabsTrigger>
          <TabsTrigger value="destinatario" className="px-6 text-zinc-400">Destinatário</TabsTrigger>
          <TabsTrigger value="transporte" className="px-6 text-zinc-400">Transporte</TabsTrigger>
          <TabsTrigger value="pagamento" className="px-6 text-zinc-400">Pagamento</TabsTrigger>
          <TabsTrigger value="informações Adicionais" className="px-6 text-zinc-400">Informações Adicionais</TabsTrigger>
        </TabsList>

        <TabsContent value="dados">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-[#111113] border-zinc-800 text-white">
                <CardHeader>
                  <CardTitle className="text-lg">Dados da Operação</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-zinc-400">Natureza da Operação</label>
                    <Input className="bg-zinc-900 border-zinc-800" placeholder="Venda de mercadoria" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-zinc-400">Data de Emissão</label>
                    <Input type="date" className="bg-zinc-900 border-zinc-800" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#111113] border-zinc-800 text-white">
                <CardHeader>
                  <CardTitle className="text-lg">Itens da Nota</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border border-zinc-800 rounded-lg p-4 text-center text-zinc-500">
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-1">
              <Card className="bg-[#111113] border-zinc-800 text-white sticky top-8">
                <CardHeader>
                  <CardTitle className="text-lg">Resumo da Nota</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-zinc-400">
                    <span>Total ICMS</span>
                    <span>R$</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Frete</span>
                    <span>R$</span>
                  </div>
                  <div className="pt-4 border-t border-zinc-800 flex justify-between items-end">
                    <span className="text-zinc-400">Valor Total</span>
                    <span className="text-2xl font-bold text-purple-500">R$</span>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-4">
                    Prosseguir para Pagamento
                  </Button>
                </CardContent>
              </Card>
            </div>

          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default NotaFiscal