'use client'

import { useState } from 'react'
import { 
  Truck, 
  Calculator, 
  MapPin, 
  Tag, 
  FileText, 
  ClipboardList,
  Package,
  DollarSign,
  Search,
  Plus,
  Printer,
  Download,
  Eye,
  Edit,
  BarChart3,
  Users,
  Calendar
} from 'lucide-react'

export default function TJExpressSystem() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchTerm, setSearchTerm] = useState('')

  // Estados para diferentes funcionalidades
  const [orcamentos] = useState([
    { id: 'ORC001', cliente: 'Empresa ABC Ltda', origem: 'São Paulo - SP', destino: 'Rio de Janeiro - RJ', valor: 850.00, status: 'Pendente', data: '2024-01-15' },
    { id: 'ORC002', cliente: 'Comércio XYZ', origem: 'Belo Horizonte - MG', destino: 'Salvador - BA', valor: 1200.00, status: 'Aprovado', data: '2024-01-14' }
  ])

  const [rastreamentos] = useState([
    { id: 'TJ001', cliente: 'Empresa ABC Ltda', origem: 'São Paulo - SP', destino: 'Rio de Janeiro - RJ', status: 'Em Trânsito', localizacao: 'Rodovia Presidente Dutra, KM 165', previsao: '2024-01-16 14:00' },
    { id: 'TJ002', cliente: 'Indústria DEF', origem: 'Curitiba - PR', destino: 'Florianópolis - SC', status: 'Entregue', localizacao: 'Destino Final', previsao: '2024-01-15 10:30' }
  ])

  const [notas] = useState([
    { id: 'NF001', numero: '000001', cliente: 'Empresa ABC Ltda', valor: 850.00, tipo: 'NFe', status: 'Emitida', data: '2024-01-15' },
    { id: 'CTE001', numero: '000001', cliente: 'Comércio XYZ', valor: 1200.00, tipo: 'CTe', status: 'Autorizada', data: '2024-01-14' }
  ])

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Header com Logo */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white p-8 rounded-2xl shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/337aa99c-fb2b-4745-9699-ad6ea1996042.png" 
              alt="T&J EXPRESS Logo" 
              className="h-16 w-auto rounded-lg shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold">Sistema de Gestão</h1>
              <p className="text-blue-100 mt-2 text-lg">Controle completo da sua transportadora</p>
            </div>
          </div>
          <Truck className="w-20 h-20 text-blue-200 opacity-80" />
        </div>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#1e3a8a] hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Orçamentos Pendentes</p>
              <p className="text-3xl font-bold text-[#1e3a8a]">12</p>
            </div>
            <div className="bg-[#1e3a8a] p-3 rounded-full">
              <Calculator className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#1e40af] hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Entregas em Trânsito</p>
              <p className="text-3xl font-bold text-[#1e40af]">8</p>
            </div>
            <div className="bg-[#1e40af] p-3 rounded-full">
              <MapPin className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#2563eb] hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Faturamento Mensal</p>
              <p className="text-3xl font-bold text-[#2563eb]">R$ 45.280</p>
            </div>
            <div className="bg-[#2563eb] p-3 rounded-full">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#3b82f6] hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">CTes Emitidos</p>
              <p className="text-3xl font-bold text-[#3b82f6]">156</p>
            </div>
            <div className="bg-[#3b82f6] p-3 rounded-full">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Atividades Recentes */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-semibold mb-6 flex items-center text-[#1e3a8a]">
          <BarChart3 className="w-6 h-6 mr-3" />
          Atividades Recentes
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-[#1e3a8a]">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-4 animate-pulse"></div>
              <span className="text-sm font-medium">CTe #000156 autorizado para Empresa ABC Ltda</span>
            </div>
            <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">há 2 min</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-[#1e40af]">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-4 animate-pulse"></div>
              <span className="text-sm font-medium">Novo orçamento solicitado - ORC003</span>
            </div>
            <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">há 15 min</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-[#2563eb]">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-4 animate-pulse"></div>
              <span className="text-sm font-medium">Entrega TJ003 saiu para entrega</span>
            </div>
            <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">há 1 hora</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderOrcamentos = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl font-bold text-[#1e3a8a]">Orçamentos de Frete</h2>
        <button className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Novo Orçamento
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center space-x-3">
            <div className="bg-[#1e3a8a] p-2 rounded-lg">
              <Search className="w-5 h-5 text-white" />
            </div>
            <input
              type="text"
              placeholder="Buscar orçamentos..."
              className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#1e3a8a] text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Rota</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Valor</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orcamentos.map((orc) => (
                <tr key={orc.id} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-[#1e3a8a]">{orc.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{orc.cliente}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{orc.origem} → {orc.destino}</td>
                  <td className="px-6 py-4 text-sm font-bold text-green-600">R$ {orc.valor.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      orc.status === 'Aprovado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {orc.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex space-x-3">
                      <button className="text-[#1e3a8a] hover:text-[#1e40af] transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 transition-colors">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="text-green-600 hover:text-green-800 transition-colors">
                        <Printer className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderRastreamento = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl font-bold text-[#1e3a8a]">Rastreamento de Mercadorias</h2>
        <button className="bg-gradient-to-r from-[#1e40af] to-[#2563eb] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Nova Remessa
        </button>
      </div>

      <div className="grid gap-6">
        {rastreamentos.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <div className="bg-[#1e3a8a] p-2 rounded-lg mr-3">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-xl text-[#1e3a8a]">{item.id}</span>
                  <span className={`ml-4 px-4 py-2 text-sm rounded-full font-medium ${
                    item.status === 'Entregue' ? 'bg-green-100 text-green-800' : 
                    item.status === 'Em Trânsito' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-gray-800 font-medium mb-2">{item.cliente}</p>
                <p className="text-sm text-gray-600 mb-3">{item.origem} → {item.destino}</p>
                <div className="mt-4 flex items-center text-sm bg-red-50 p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-gray-700 font-medium">{item.localizacao}</span>
                </div>
                {item.status !== 'Entregue' && (
                  <div className="mt-3 flex items-center text-sm bg-green-50 p-3 rounded-lg">
                    <Calendar className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700 font-medium">Previsão: {item.previsao}</span>
                  </div>
                )}
              </div>
              <div className="flex space-x-3">
                <button className="bg-[#1e3a8a] text-white px-4 py-2 rounded-lg hover:bg-[#1e40af] transition-colors text-sm font-medium">
                  Ver Detalhes
                </button>
                <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                  <Printer className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderEtiquetas = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl font-bold text-[#1e3a8a]">Impressão de Etiquetas</h2>
        <button className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center">
          <Tag className="w-5 h-5 mr-2" />
          Nova Etiqueta
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Formulário de Criação */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-6 text-[#1e3a8a]">Gerar Etiqueta</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Código da Remessa</label>
              <input type="text" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all" placeholder="TJ001" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Destinatário</label>
              <input type="text" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all" placeholder="Nome do destinatário" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Endereço de Destino</label>
              <textarea className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all" rows={3} placeholder="Endereço completo"></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Peso (kg)</label>
                <input type="number" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all" placeholder="0.00" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Valor (R$)</label>
                <input type="number" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all" placeholder="0.00" />
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center font-medium">
              <Printer className="w-5 h-5 mr-2" />
              Gerar e Imprimir
            </button>
          </div>
        </div>

        {/* Preview da Etiqueta */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-6 text-[#1e3a8a]">Preview da Etiqueta</h3>
          <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg">
            <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white p-4 rounded-lg mb-4 flex items-center justify-between">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/337aa99c-fb2b-4745-9699-ad6ea1996042.png" 
                alt="T&J EXPRESS Logo" 
                className="h-8 w-auto"
              />
              <Truck className="w-8 h-8" />
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold text-[#1e3a8a]">Código:</span>
                <span className="font-bold">TJ001</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold text-[#1e3a8a]">Destinatário:</span>
                <span className="font-medium">Empresa ABC Ltda</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <p className="text-xs font-semibold text-[#1e3a8a] mb-2">Endereço de Destino:</p>
                <p className="text-xs leading-relaxed">Rua das Flores, 123<br />Centro - Rio de Janeiro - RJ<br />CEP: 20000-000</p>
              </div>
              <div className="border-t pt-3 mt-3 flex justify-between text-xs bg-blue-50 p-2 rounded">
                <span className="font-semibold">Peso: 2.5kg</span>
                <span className="font-semibold">Valor: R$ 850,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderNotasFiscais = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl font-bold text-[#1e3a8a]">Notas Fiscais e CTe</h2>
        <div className="flex space-x-3">
          <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Nova NFe
          </button>
          <button className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Novo CTe
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#1e3a8a] text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Número</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Tipo</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Valor</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Data</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {notas.map((nota) => (
                <tr key={nota.id} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-[#1e3a8a]">{nota.numero}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      nota.tipo === 'NFe' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {nota.tipo}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{nota.cliente}</td>
                  <td className="px-6 py-4 text-sm font-bold text-green-600">R$ {nota.valor.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      nota.status === 'Emitida' || nota.status === 'Autorizada' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {nota.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium">{nota.data}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex space-x-3">
                      <button className="text-[#1e3a8a] hover:text-[#1e40af] transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="text-green-600 hover:text-green-800 transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="text-purple-600 hover:text-purple-800 transition-colors">
                        <Printer className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderManifesto = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl font-bold text-[#1e3a8a]">Manifesto de Cargas</h2>
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center">
          <ClipboardList className="w-5 h-5 mr-2" />
          Novo Manifesto
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Formulário de Manifesto */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-6 text-[#1e3a8a]">Criar Manifesto</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Número do Manifesto</label>
                <input type="text" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all" placeholder="MAN001" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Data de Emissão</label>
                <input type="date" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Motorista</label>
                <select className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all">
                  <option>João Silva - CNH: 12345678901</option>
                  <option>Maria Santos - CNH: 10987654321</option>
                  <option>Pedro Oliveira - CNH: 11223344556</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Veículo</label>
                <select className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all">
                  <option>Scania R450 - ABC-1234</option>
                  <option>Volvo FH540 - DEF-5678</option>
                  <option>Mercedes Actros - GHI-9012</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Rota</label>
              <input type="text" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all" placeholder="São Paulo → Rio de Janeiro → Belo Horizonte" />
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-3">CTes Incluídos</h4>
              <div className="space-y-3 max-h-40 overflow-y-auto">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3 w-4 h-4 text-[#1e3a8a]" defaultChecked />
                    <span className="text-sm font-medium">CTe 000001 - Empresa ABC Ltda - R$ 850,00</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3 w-4 h-4 text-[#1e3a8a]" defaultChecked />
                    <span className="text-sm font-medium">CTe 000002 - Comércio XYZ - R$ 1.200,00</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3 w-4 h-4 text-[#1e3a8a]" />
                    <span className="text-sm font-medium">CTe 000003 - Indústria DEF - R$ 750,00</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center font-medium">
              <ClipboardList className="w-5 h-5 mr-2" />
              Gerar Manifesto
            </button>
          </div>
        </div>

        {/* Resumo do Manifesto */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-6 text-[#1e3a8a]">Resumo</h3>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white p-6 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Total de CTes</span>
                <span className="text-2xl font-bold">2</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Valor Total</span>
                <span className="text-2xl font-bold">R$ 2.050,00</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-[#1e3a8a]">Informações do Transporte</h4>
              <div className="text-sm text-gray-600 space-y-2 bg-blue-50 p-4 rounded-lg">
                <p><span className="font-semibold text-[#1e3a8a]">Motorista:</span> João Silva</p>
                <p><span className="font-semibold text-[#1e3a8a]">Veículo:</span> Scania R450</p>
                <p><span className="font-semibold text-[#1e3a8a]">Placa:</span> ABC-1234</p>
                <p><span className="font-semibold text-[#1e3a8a]">Rota:</span> SP → RJ → BH</p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center text-sm font-medium">
                <Printer className="w-5 h-5 mr-2" />
                Imprimir Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'orcamentos', label: 'Orçamentos', icon: Calculator },
    { id: 'rastreamento', label: 'Rastreamento', icon: MapPin },
    { id: 'etiquetas', label: 'Etiquetas', icon: Tag },
    { id: 'notas', label: 'NFe/CTe', icon: FileText },
    { id: 'manifesto', label: 'Manifesto', icon: ClipboardList }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-[#1e3a8a] to-[#1e40af] shadow-2xl z-50 transform lg:translate-x-0 transition-transform">
        <div className="p-6 border-b border-blue-700">
          <div className="flex items-center">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/337aa99c-fb2b-4745-9699-ad6ea1996042.png" 
              alt="T&J EXPRESS Logo" 
              className="h-12 w-auto rounded-lg shadow-lg"
            />
            <div className="ml-3">
              <h1 className="text-lg font-bold text-white">Sistema de Gestão</h1>
              <p className="text-xs text-blue-200">Transportadora</p>
            </div>
          </div>
        </div>

        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-6 py-4 text-left hover:bg-blue-700 transition-all duration-300 ${
                  activeTab === item.id ? 'bg-blue-700 text-white border-r-4 border-white shadow-lg' : 'text-blue-100 hover:text-white'
                }`}
              >
                <Icon className="w-6 h-6 mr-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gradient-to-r from-blue-800 to-indigo-800 p-4 rounded-lg text-white text-center shadow-lg">
            <Users className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm font-semibold">Suporte 24h</p>
            <p className="text-xs opacity-90">(11) 9999-9999</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        <div className="p-8">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'orcamentos' && renderOrcamentos()}
          {activeTab === 'rastreamento' && renderRastreamento()}
          {activeTab === 'etiquetas' && renderEtiquetas()}
          {activeTab === 'notas' && renderNotasFiscais()}
          {activeTab === 'manifesto' && renderManifesto()}
        </div>
      </div>
    </div>
  )
}