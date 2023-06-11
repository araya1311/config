import React, { useState } from 'react';
import { Form, Input, Checkbox, Button, Card} from 'antd';

const NuevoRegistro = () => {

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    console.log(values);
    setLoading(false);
  };

  const validateNumberField = (value: any, callback: any) => {
    const numberPattern = /^[0-9]*$/;
    if (!numberPattern.test(value)) {
      callback('Please enter a valid number');
    } else {
      callback();
    }
  };
  return (
    <Card className='card'>
      <Form form={form} onFinish={handleSubmit} className='form'>
        <Form.Item
          name="countryId"
          label="Country ID"
          rules={[
            { required: true, message: 'Please enter Country ID' },
            { validator: validateNumberField },
          ]}
        >
          <Input type="text" pattern="[0-9]*" maxLength={8} />
        </Form.Item>
        <Form.Item
          name="finalCustomer"
          label="Final Customer"
          rules={[{ required: true, message: 'Final Customer' }]}
        >
          <Input type="number" maxLength={8}/>
        </Form.Item>
        <Form.Item 
          name="invoicingConcept" 
          label="Invoicing Concept"
          rules={[
            { required: true, message: 'Please enter Invoicing Concept' },
            { validator: validateNumberField },
          ]}
        >
          <Input type="number" maxLength={9} />
        </Form.Item>
        <Form.Item 
          name="invoicingPeriod" 
          label="Invoicing Period"
          rules={[
            { required: true, message: 'Please enter Invoicing Period' },
            { validator: validateNumberField },
          ]}
        >
          <Input type="number"maxLength={9} />
        </Form.Item>
        <Form.Item 
          name="invoicingStart"
          label="Invoicing Start" 
          rules={[
            { required: true, message: 'Please enter Invoicing Start'},
            { validator: validateNumberField },]}
        >
          <Input type="number" maxLength={9} />
        </Form.Item>
        <Form.Item 
            name="taxBase" 
            label="Tax Base"
            rules={[
            { required: true, message: 'Please enter Tax Base'},
            { validator: validateNumberField },]}
        >
          <Input type="number"  maxLength={9}/>
        </Form.Item>
        <Form.Item
          name="iva" 
          label="IVA"
          rules={[
            { required: true, message: 'Please enter IVA'},
            { validator: validateNumberField },]}
        >
          <Input type="number" maxLength={9} />
        </Form.Item>
        <Form.Item  
          name="totalAmount" 
          label="Total Amount"
          rules={[
            { required: true, message: 'Please enter Total Amount '},
            { validator: validateNumberField },]}
          >
          <Input type="number" maxLength={8} />
        </Form.Item>
        <Form.Item 
          name="language" 
          label="Language"  
          rules={[
          { required: true, message: 'Please enter Language'},
          { validator: validateNumberField },]}
        >
          <Input type="text" maxLength={20} />
        </Form.Item>
        <Form.Item
          name="senderMail"
          label="Sender Mail"
          rules={[
          {
            type: 'email',
            message: 'Ingresa un correo electrónico válido',
            required: true
          },]}
        >
          <Input type="text" maxLength={60}/>
        </Form.Item>
        <Form.Item
          name="logoUfinet"
          label="Logo Ufinet"
          rules={[
          {
            required: true,
            message: 'Por favor, selecciona un archivo de logo.',
          },
          ]}
          >
  <Input type="file" />
</Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Guardar
          </Button>
        </Form.Item>
      </Form>
    </Card>
  
  )
}

export default NuevoRegistro