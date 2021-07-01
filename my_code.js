// const { InfluxDB } = require("@influxdata/influxdb-client");

// // You can generate a Token from the "Tokens Tab" in the UI
// const token =
//   "WqFc7riiWAYOr5r6P-5q6yBmr4UX5KGrVgggVxNXiX3GPnqR-XHAMl604ExvtfXMSA8X5haRCy6r8YFQewcuVQ==";
// const org = "my dev";
// const bucket = "my-dev";

// const client = new InfluxDB({ url: "http://localhost:8086", token: token });
// const { Point } = require("@influxdata/influxdb-client");
// const writeApi = client.getWriteApi(org, bucket);
// writeApi.useDefaultTags({ host: "host1" });

// const point = new Point("mem").floatField("used_percent", Math.random());
// writeApi.writePoint(point);
// writeApi
//   .close()
//   .then(() => {
//     console.log("FINISHED");
//   })
//   .catch((e) => {
//     console.error(e);
//     console.log("\\nFinished ERROR");
//   });

// const queryApi = client.getQueryApi(org);

// const query = `from(bucket: \"${bucket}\") |> range(start: -1h)`;
// queryApi.queryRows(query, {
//   next(row, tableMeta) {
//     const o = tableMeta.toObject(row);
//     console.log(
//       `${o._time} ${o._measurement} in \'${o.location}\' (${o.example}): ${o._field}=${o._value}`
//     );
//   },
//   error(error) {
//     console.error(error);
//     console.log("nFinished ERROR");
//   },
//   complete() {
//     console.log("Finished SUCCESS");
//   },
// });
