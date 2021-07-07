const { InfluxDB } = require("@influxdata/influxdb-client");

// You can generate a Token from the "Tokens Tab" in the UI
const token =
  "7wQejxjJ5FVj4IpXU2SdgAOngBvjAc8Nro3QcbsDj6Q1A7rwB5zWP6wxqge2v8DVlb5PXIFOBTOUg6viiStuTw==";
const org = "my-org";
const bucket = "my-bucket-1";

const client = new InfluxDB({ url: "http://localhost:8086", token: token });
const { Point } = require("@influxdata/influxdb-client");
const writeApi = client.getWriteApi(org, bucket);
writeApi.useDefaultTags({ host: "host2" });

const point = new Point("mem").floatField("used_percent", Math.random());
// writeApi.writePoint(point);
writeApi
  .close()
  .then(() => {
    console.log("FINISHED");
  })
  .catch((e) => {
    console.error(e);
    console.log("\\nFinished ERROR");
  });

const queryApi = client.getQueryApi(org);

const query = `from(bucket: \"${bucket}\") |> range(start: -1h)`;
queryApi.queryRows(query, {
  next(row, tableMeta) {
    const o = tableMeta.toObject(row);
    console.log(
      `${o._time} ${o._measurement} host: ${o.host} in \'${o.location}\' (${o.example}): ${o._field}=${o._value}`
    );
  },
  error(error) {
    console.error(error);
    console.log("nFinished ERROR");
  },
  complete() {
    console.log("Finished SUCCESS");
  },
});
