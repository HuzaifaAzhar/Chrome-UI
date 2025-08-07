"use client"

import { useState } from 'react'
import { ChevronLeft, ChevronRight, RotateCcw, Lock, Star, MoreVertical, Minus, Square, X, Search, Mic, Camera, Plus, Bell, Grid3X3 } from 'lucide-react'

interface Tab {
  id: string
  title: string
  url: string
  favicon?: string
  content: 'google' | 'blank'
}

interface Shortcut {
  id: string
  name: string
  icon: string
  color: string
}

export default function ChromeBrowser() {
  const [activeTab, setActiveTab] = useState('tab1')
  const [tabs] = useState<Tab[]>([
    {
      id: 'tab1',
      title: 'New Tab',
      url: 'chrome://newtab/',
      favicon: '🌐',
      content: 'google'
    },
    {
      id: 'tab2',
      title: 'Blank Page',
      url: 'about:blank',
      favicon: '📄',
      content: 'blank'
    }
  ])

  const [shortcuts] = useState<Shortcut[]>([
    {
      id: 'creepjs',
      name: 'CreepJS',
      icon: '🔍',
      color: 'bg-pink-500'
    },
    {
      id: 'v0',
      name: 'v0',
      icon: 'v0',
      color: 'bg-purple-500'
    },
    {
      id: 'techlife',
      name: 'Techlife',
      icon: '⚙️',
      color: 'bg-gray-500'
    },
    {
      id: 'webstore',
      name: 'Web Store',
      icon: '🛍️',
      color: 'bg-blue-500'
    }
  ])

  // Separate state for address bar and search bar
  const [addressValue, setAddressValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressValue(e.target.value)
  }

  const handleAddressKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Handle navigation in address bar
      console.log('Navigate to:', addressValue)
      // In a real browser, this would navigate to the URL
    }
  }

  const handleAddressFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    // When focused, show the actual URL for editing and select all text
    if (!addressValue) {
      setAddressValue(activeTabData?.url || '')
    }
    // Select all text when focused (like real browsers)
    setTimeout(() => {
      e.target.select()
    }, 0)
  }

  const handleAddressClick = (e: React.MouseEvent<HTMLInputElement>) => {
    // Ensure the input is focusable and clickable
    e.currentTarget.focus()
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Handle Google search
      console.log('Search for:', searchValue)
      // In a real browser, this would perform a Google search
    }
  }

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    setAddressValue('') // Clear address input when switching tabs
  }

  const activeTabData = tabs.find(tab => tab.id === activeTab)

  const renderTabContent = () => {
    if (activeTabData?.content === 'google') {
      return (
        <div className="flex-1 bg-white relative">
          {/* Top Right Icons */}
          <div className="absolute top-6 right-6 flex items-center gap-4 text-sm text-gray-600">
            <button className="hover:underline transition-all">Gmail</button>
            <button className="hover:underline transition-all">Images</button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Bell size={16} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Grid3X3 size={16} />
            </button>
          </div>

          {/* Google Logo and Search */}
          <div className="flex flex-col items-center justify-center h-full -mt-16 pointer-events-none">
            
            {/* Google Logo */}
            <div className="mb-6 sm:mb-8">
              <div className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </div>
            </div>

            {/* Google Search Bar (Separate from Address Bar) */}
            <div className="w-full max-w-xl mb-8 px-4 sm:px-0 pointer-events-auto">
              <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-3 shadow-sm hover:shadow-md transition-shadow">
                <Search size={16} className="text-gray-400 mr-3 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search Google or type a URL"
                  className="flex-1 text-base outline-none text-gray-700 min-w-0"
                  value={searchValue}
                  onChange={handleSearchChange}
                  onKeyDown={handleSearchKeyDown}
                />
                <div className="flex items-center gap-1 sm:gap-2 ml-2 sm:ml-3 flex-shrink-0">
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Mic size={16} className="text-blue-500" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Camera size={16} className="text-blue-500" />
                  </button>
                  {/* AI Mode Button - Inside Google Search Bar */}
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors flex items-center gap-1 sm:gap-1.5 ml-1 sm:ml-2 whitespace-nowrap">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="hidden xs:inline sm:inline">AI Mode</span>
                    <span className="xs:hidden sm:hidden">AI</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Shortcuts */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap justify-center px-4 pointer-events-auto">
              {shortcuts.map((shortcut) => (
                <div key={shortcut.id} className="flex flex-col items-center group cursor-pointer">
                  <div className={`w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 ${shortcut.color} rounded-full flex items-center justify-center text-white text-sm xs:text-base sm:text-lg mb-1 sm:mb-2 group-hover:shadow-lg transition-shadow`}>
                    {shortcut.icon}
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors">
                    {shortcut.name}
                  </span>
                </div>
              ))}
              
              {/* Add Shortcut */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center mb-1 sm:mb-2 transition-colors">
                  <Plus size={14} className="text-gray-600 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors">
                  Add shortcut
                </span>
              </div>
            </div>
          </div>

          {/* Customize Chrome Button */}
          <button className="absolute bottom-6 right-6 bg-white border border-gray-300 hover:border-gray-400 rounded-full px-4 py-2 text-sm text-gray-700 hover:shadow-sm transition-all flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-400 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-yellow-600 rounded-sm"></div>
            </div>
            Customize Chrome
          </button>
        </div>
      )
    } else {
      return (
        <div className="flex-1 bg-white flex items-center justify-center">
          <div className="text-center text-gray-500">
            <h2 className="text-2xl font-light mb-4">Blank Page</h2>
            <p className="text-sm">This is a blank tab</p>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl h-[900px] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col">
        
        {/* Title Bar with Tabs and Window Controls */}
        <div className="h-10 bg-gray-100 border-b border-gray-200 flex items-center relative">
          
          {/* Tab Section */}
          <div className="flex items-center flex-1 px-2">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`h-8 min-w-32 max-w-48 px-3 flex items-center gap-2 cursor-pointer transition-all duration-200 relative ${
                  activeTab === tab.id 
                    ? 'bg-white border-t-2 border-x border-gray-300 rounded-t-lg -mb-px z-10' 
                    : 'bg-gray-200 hover:bg-gray-300 rounded-t-lg'
                } ${index > 0 ? '-ml-px' : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                <span className="text-xs">{tab.favicon}</span>
                <span className="text-xs text-gray-700 truncate">{tab.title}</span>
                <button className={`opacity-0 hover:opacity-100 transition-opacity ${activeTab === tab.id ? 'group-hover:opacity-100' : ''}`}>
                  <X size={10} className="text-gray-500 hover:text-gray-700" />
                </button>
              </div>
            ))}
            <button className="w-7 h-7 ml-2 rounded hover:bg-gray-200 flex items-center justify-center transition-colors">
              <Plus size={14} className="text-gray-600" />
            </button>
          </div>

          {/* Window Controls */}
          <div className="flex gap-2 px-2">
            <button className="w-7 h-7 rounded hover:bg-gray-200 flex items-center justify-center transition-colors">
              <Minus size={10} className="text-gray-600" />
            </button>
            <button className="w-7 h-7 rounded hover:bg-gray-200 flex items-center justify-center transition-colors">
              <Square size={8} className="text-gray-600" />
            </button>
            <button className="w-7 h-7 rounded hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors">
              <X size={10} />
            </button>
          </div>
        </div>

        {/* Address Bar (Separate from Google Search) */}
        <div className="h-12 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
          
          {/* Navigation Controls */}
          <div className="flex gap-1">
            <button className="w-8 h-8 rounded hover:bg-gray-200 flex items-center justify-center transition-colors opacity-40">
              <ChevronLeft size={14} />
            </button>
            <button className="w-8 h-8 rounded hover:bg-gray-200 flex items-center justify-center transition-colors opacity-40">
              <ChevronRight size={14} />
            </button>
            <button className="w-8 h-8 rounded hover:bg-gray-200 flex items-center justify-center transition-colors">
              <RotateCcw size={12} />
            </button>
          </div>

          {/* Editable Address Bar */}
          <div className="flex-1 mx-4">
            <div className="h-8 bg-white border border-gray-300 rounded-full flex items-center px-4 gap-2 hover:shadow-sm transition-shadow">
              <Lock size={12} className="text-green-600" />
              <input
                type="text"
                className="flex-1 text-sm text-gray-700 bg-transparent outline-none cursor-text"
                value={addressValue || activeTabData?.url || ''}
                onChange={handleAddressChange}
                onKeyDown={handleAddressKeyDown}
                onFocus={handleAddressFocus}
                onClick={handleAddressClick}
                placeholder="Search Google or type a URL"
                autoComplete="off"
                spellCheck="false"
              />
              <Star size={14} className="text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 rounded hover:bg-gray-200 flex items-center justify-center transition-colors">
              <MoreVertical size={14} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  )
}
