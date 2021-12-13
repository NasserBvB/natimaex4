import React from 'react'
import { Categories } from '../components/Categories'
import Layout from '../components/Layout'

export default function CategoriesPage() {
    return (
        <Layout>
         <Categories filter='all'/>
        </Layout>
     )
 }
 