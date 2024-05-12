import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  const [tab, setTab] = useState('monthly')
  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li className={tab === 'monthly' ? "active" : ""} onClick={()=>setTab('monthly')}>Monthly</li>
        <li className={tab === 'yearly' ? "active" : ""} onClick={()=>setTab('yearly')}>Yearly</li>
      </ul>
      <Section className="row">
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Starter'
              price='&nbsp;200'
              currency='DT'
              timeline='monthly'
              features={['Personalized workout plan tailored to your goals and fitness level', 'Customized diet plan for optimal nutrition and performance.', ' Weekly progress tracking to monitor your results and adjust strategies as needed.']}
              btnText='Purchase Now'
              btnLink='/contact'
            />
          )}
         
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
         {tab==='monthly' && (
            <PricingTable 
              title='Essential'
              price='&nbsp;500'
              currency='DT'
              timeline='3 Months'
              features={['Personalized workout plan tailored to your goals and fitness level', 'Customized diet plan for optimal nutrition and performance.', ' Weekly progress tracking to monitor your results and adjust strategies as needed.']}
              btnText='Purchase Now'
              btnLink='/contact'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Ultimate'
              price='&nbsp;1500'
              currency='DT'
              timeline='yearly'
              features={['Personalized workout plan tailored to your goals and fitness level', 'Customized diet plan for optimal nutrition and performance.', ' Weekly progress tracking to monitor your results and adjust strategies as needed.']}
              btnText='Purchase Now'
              btnLink='/contact'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Advanced'
              price='&nbsp;900'
              currency='DT'
              timeline='6 Months'
              features={['Personalized workout plan tailored to your goals and fitness level', 'Customized diet plan for optimal nutrition and performance.', ' Weekly progress tracking to monitor your results and adjust strategies as needed.']}
              btnText='Purchase Now'
              btnLink='/contact'
            />
          )}
          
          <Spacing lg='25' md='25'/>
        </Section>
      </Section>
    </Section>
  )
}
