import React, { useState } from "react";

import {
  Alert,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

import content from "../data/content";
import courses from "../data/courses";

import PageShell from "../components/PageShell";

export default function Registration({ lang }) {
  const t = content[lang];
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({ fullName: "", email: "", phone: "", course: "", preferredLanguage: lang });
  const update = (k) => (e) => setValues({ ...values, [k]: e.target.value });
  return <PageShell title={t.register} subtitle={t.registerText}>
    <Card component="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <CardContent sx={{ p: { xs: 3, md: 5 }, maxWidth: 760 }}>
        {sent && <Alert severity="success" sx={{ mb: 3 }}>{t.success}</Alert>}
        <Stack spacing={2.5}>
          <TextField required label={t.fullName} value={values.fullName} onChange={update("fullName")} />
          <TextField required type="email" label={t.email} value={values.email} onChange={update("email")} />
          <TextField label={t.phone} value={values.phone} onChange={update("phone")} />
          <FormControl required><InputLabel>{t.course}</InputLabel><Select label={t.course} value={values.course} onChange={update("course")}>{courses.map(c => <MenuItem key={c.title} value={c.title}>{c.title}</MenuItem>)}</Select></FormControl>
          <FormControl><InputLabel>{t.preferredLanguage}</InputLabel><Select label={t.preferredLanguage} value={values.preferredLanguage} onChange={update("preferredLanguage")}><MenuItem value="en">English</MenuItem><MenuItem value="de">Deutsch</MenuItem><MenuItem value="ar">العربية</MenuItem></Select></FormControl>
          <Button type="submit" variant="contained" size="large">{t.submitRegistration}</Button>
        </Stack>
      </CardContent>
    </Card>
  </PageShell>;
}