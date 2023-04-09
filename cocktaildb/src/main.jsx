import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools"

let queryClient=new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} position="bottom-left"></ReactQueryDevtools>
    </QueryClientProvider>
 
)
