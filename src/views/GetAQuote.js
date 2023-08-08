import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  Box,
  TextField,
  Typography,
} from "@mui/material";

import { Header } from "./Header";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    request: yup.string().required(),
  })
  .required();

export const GetAQuote = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Header />

      <CssBaseline />

      <Grid container spacing={0} sx={{ display: "flex" }}>
        <Grid item xs={12} sx={{ flexGrow: 1, marginTop: "30px" }}>
          <Container maxWidth="md">
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: "#595e6c",
                fontSize: "2.0rem",
                fontWeight: "bold",
              }}
            >
              Request a Quote
            </Typography>

            <Typography variant="body2" component="div" sx={{ color: "gray" }}>
              We just need some information to get started
            </Typography>

            <FormControl
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                margin="normal"
                {...register("name")}
              />

              <Typography
                variant="body2"
                component="span"
                sx={{ color: "red" }}
              >
                {errors.name?.message}
              </Typography>

              <TextField
                id="email"
                label="Email"
                variant="outlined"
                margin="normal"
                {...register("email")}
              />

              <Typography
                variant="body2"
                component="span"
                sx={{ color: "red" }}
              >
                {errors.email?.message}
              </Typography>

              <TextField
                id="request"
                label="Request"
                variant="outlined"
                multiline
                rows={5}
                margin="normal"
                {...register("request")}
              />

              <Typography
                variant="body2"
                component="span"
                sx={{ color: "red" }}
              >
                {errors.request?.message}
              </Typography>

              <Box sx={{ marginTop: "20px" }}>
                <Button
                  variant="contained"
                  onClick={handleSubmit(onSubmit)}
                  sx={{
                    color: "secondary",
                    px: "30px",
                    py: "10px",
                    textTransform: "none",
                  }}
                >
                  Submit
                </Button>
              </Box>
            </FormControl>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
