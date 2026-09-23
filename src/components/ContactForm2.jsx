import React, { useState } from "react";

import {
  Alert,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
} from "@mui/material";

export default function ContactForm({ t }) {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({ fullName: "", email: "", phone: "", subject: "", message: "" });
  const update = (k) => (e) => setValues({ ...values, [k]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };
  return <Card component="form" onSubmit={submit}><CardContent sx={{ p: 3 }}>
    {sent && <Alert severity="success" sx={{ mb: 2 }}>{t.success}</Alert>}
    <Stack spacing={2}>
      <TextField required label={t.fullName} value={values.fullName} onChange={update("fullName")} />
      <TextField required type="email" label={t.email} value={values.email} onChange={update("email")} />
      <TextField label={t.phone} value={values.phone} onChange={update("phone")} />
      <TextField required label={t.subject} value={values.subject} onChange={update("subject")} />
      <TextField required multiline minRows={5} label={t.message} value={values.message} onChange={update("message")} />
      <Button type="submit" variant="contained" size="large">{t.send}</Button>
    </Stack>
  </CardContent></Card>;
}